import { ScTemplate, ScType } from 'ts-sc-client';
import { client, scUtils } from '@api';
import { TLanguage } from '@model';
import { langToKeynode, snakeToCamelCase } from 'ostis-ui-lib';

import { getStaticGuideSections } from './guideFallback';
import type { IGuideSection } from './guideTypes';

export type { IGuideSection };

/** Дедупликация параллельных запросов (React StrictMode в dev, повторный заход на вкладку). */
const guideSectionsInflight = new Map<TLanguage, Promise<IGuideSection[]>>();

export async function getGuideSections(lang: TLanguage): Promise<IGuideSection[]> {
  let pending = guideSectionsInflight.get(lang);
  if (!pending) {
    pending = fetchGuideSections(lang).catch((err) => {
      guideSectionsInflight.delete(lang);
      throw err;
    });
    guideSectionsInflight.set(lang, pending);
  }
  return pending;
}

async function fetchGuideSectionsFromKb(lang: TLanguage): Promise<IGuideSection[]> {
  const { guideForBeginners, nrelDecomposition, nrelExplanation } = await scUtils.searchKeynodes(
    'guide_for_beginners',
    'nrel_decomposition',
    'nrel_explanation',
  );

  if (!guideForBeginners || !nrelDecomposition || !nrelExplanation) {
    return [];
  }

  const langKeynodeName = langToKeynode[lang];
  const langKeynodeResult = await scUtils.searchKeynodes(langKeynodeName);
  const langKeynode = langKeynodeResult[snakeToCamelCase(langKeynodeName)];

  const containerTemplate = new ScTemplate();
  containerTemplate.quintuple(
    guideForBeginners,
    ScType.VarCommonArc,
    [ScType.VarNode, '_container'],
    ScType.VarPermPosArc,
    nrelDecomposition,
  );

  const containerResult = await client.searchByTemplate(containerTemplate);

  if (containerResult.length === 0) {
    return [];
  }

  const container = containerResult[0].get('_container');

  const tryMember = new ScTemplate();
  tryMember.triple(container, ScType.MembershipArc, [ScType.VarNode, '_section']);
  let sectionsResult = await client.searchByTemplate(tryMember);

  if (sectionsResult.length === 0) {
    const tryPerm = new ScTemplate();
    tryPerm.triple(container, ScType.VarPermPosArc, [ScType.VarNode, '_section']);
    sectionsResult = await client.searchByTemplate(tryPerm);
  }

  if (sectionsResult.length === 0) {
    const tryCommon = new ScTemplate();
    tryCommon.triple(container, ScType.VarCommonArc, [ScType.VarNode, '_section']);
    sectionsResult = await client.searchByTemplate(tryCommon);
  }

  const sectionAddrs = sectionsResult.map((r) => r.get('_section'));

  const sections: IGuideSection[] = [];

  for (let i = 0; i < sectionAddrs.length; i++) {
    const sectionAddr = sectionAddrs[i];

    const title = await scUtils.getMainId(sectionAddr, lang);

    const explanationTemplate = new ScTemplate();
    explanationTemplate.quintuple(
      sectionAddr,
      ScType.VarCommonArc,
      [ScType.VarNodeLink, '_link'],
      ScType.VarPermPosArc,
      nrelExplanation,
    );
    explanationTemplate.triple(langKeynode, ScType.VarPermPosArc, '_link');

    const explResult = await client.searchByTemplate(explanationTemplate);

    if (explResult.length > 0) {
      const linkAddr = explResult[0].get('_link');

      const [content] = await client.getLinkContents([linkAddr]);
      const contentData = String(content.data);

      sections.push({ title: String(title || ''), text: contentData });
    }
  }

  return sections;
}

async function fetchGuideSections(lang: TLanguage): Promise<IGuideSection[]> {
  try {
    const fromKb = await fetchGuideSectionsFromKb(lang);
    if (fromKb.length > 0) {
      return fromKb;
    }
  } catch {
    /* статический fallback */
  }
  return getStaticGuideSections(lang);
}
