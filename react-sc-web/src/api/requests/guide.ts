import { ScTemplate, ScType } from 'ts-sc-client';
import { client, scUtils } from '@api';
import { TLanguage } from '@model';
import { langToKeynode, snakeToCamelCase } from 'ostis-ui-lib';

export interface IGuideSection {
  title: string;
  text: string;
}

export const getGuideSections = async (lang: TLanguage): Promise<IGuideSection[]> => {
  const { guideForBeginners, nrelDecomposition, nrelExplanation } = await scUtils.searchKeynodes(
    'guide_for_beginners',
    'nrel_decomposition',
    'nrel_explanation',
  );

  const langKeynodeName = langToKeynode[lang];
  const langKeynodeResult = await scUtils.searchKeynodes(langKeynodeName);
  const langKeynode = langKeynodeResult[snakeToCamelCase(langKeynodeName)];

  const decompositionTemplate = new ScTemplate();
  decompositionTemplate.quintuple(
    guideForBeginners,
    ScType.VarCommonArc,
    [ScType.VarNode, '_section'],
    ScType.VarPermPosArc,
    nrelDecomposition,
  );

  const decompositionResult = await client.searchByTemplate(decompositionTemplate);
  const sectionAddrs = decompositionResult.map((r) => r.get('_section'));

  const sections: IGuideSection[] = [];

  for (const sectionAddr of sectionAddrs) {
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
      sections.push({ title: String(title || ''), text: String(content.data) });
    }
  }

  return sections;
};
