import { ScTemplate, ScType } from 'ts-sc-client';
import { client, scUtils } from '@api';
import { TLanguage } from '@model';
import { langToKeynode, snakeToCamelCase } from 'ostis-ui-lib';

export interface IGuideSection {
  title: string;
  text: string;
}

export const getGuideSections = async (lang: TLanguage): Promise<IGuideSection[]> => {
  console.log('[Guide] Starting getGuideSections...');

  // 1. Проверяем что searchKeynodes находит узлы
  console.log('[Guide] Step 1: Searching for keynodes...');
  const { guideForBeginners, nrelDecomposition, nrelExplanation } = await scUtils.searchKeynodes(
    'guide_for_beginners',
    'nrel_decomposition',
    'nrel_explanation',
  );

  console.log('[Guide] guideForBeginners:', guideForBeginners?.value);
  console.log('[Guide] nrelDecomposition:', nrelDecomposition?.value);
  console.log('[Guide] nrelExplanation:', nrelExplanation?.value);

  if (!guideForBeginners || !nrelDecomposition || !nrelExplanation) {
    console.error('[Guide] ERROR: Not all keynodes found!');
    return [];
  }

  // 2. Получаем lang keynode для фильтрации
  console.log('[Guide] Step 1.5: Getting lang keynode...');
  const langKeynodeName = langToKeynode[lang];
  const langKeynodeResult = await scUtils.searchKeynodes(langKeynodeName);
  const langKeynode = langKeynodeResult[snakeToCamelCase(langKeynodeName)];
  console.log('[Guide] langKeynode:', langKeynode?.value);

  // 3. Ищем контейнер (промежуточная нода) через nrel_decomposition
  console.log('[Guide] Step 2: Searching for container...');
  const containerTemplate = new ScTemplate();
  containerTemplate.quintuple(
    guideForBeginners,
    ScType.CommonArc,
    [ScType.VarNode, '_container'],
    ScType.PermPosArc,
    nrelDecomposition,
  );

  const containerResult = await client.searchByTemplate(containerTemplate);
  console.log('[Guide] container result count:', containerResult.length);

  if (containerResult.length === 0) {
    console.error('[Guide] ERROR: Container not found!');
    return [];
  }

  const container = containerResult[0].get('_container');
  console.log('[Guide] container addr:', container?.value);

  // 4. От контейнера ищем дочерние разделы через -> (CommonArc)
  console.log('[Guide] Step 3: Searching for sections from container...');
  const sectionsTemplate = new ScTemplate();
  sectionsTemplate.triple(container, ScType.MembershipArc, [ScType.VarNode, '_section']);

  const sectionsResult = await client.searchByTemplate(sectionsTemplate);
  console.log('[Guide] sections result count:', sectionsResult.length);

  const sectionAddrs = sectionsResult.map((r) => r.get('_section'));
  console.log('[Guide] section addresses:', sectionAddrs.map(a => a?.value));

  const sections: IGuideSection[] = [];

  // 4. Для каждого раздела получаем заголовок и текст
  for (let i = 0; i < sectionAddrs.length; i++) {
    const sectionAddr = sectionAddrs[i];
    console.log(`[Guide] Step 3.${i}: Processing section ${i + 1}/${sectionAddrs.length}`);

    const title = await scUtils.getMainId(sectionAddr, lang);
    console.log(`[Guide]   title:`, title);

    // Ищем explanation с фильтром по языку
    const explanationTemplate = new ScTemplate();
    explanationTemplate.quintuple(
      sectionAddr,
      ScType.CommonArc,
      [ScType.VarNodeLink, '_link'],
      ScType.PermPosArc,
      nrelExplanation,
    );
    // Добавляем фильтр по языку: lang -> link
    explanationTemplate.triple(langKeynode, ScType.PermPosArc, '_link');

    const explResult = await client.searchByTemplate(explanationTemplate);
    console.log(`[Guide]   explanation result count:`, explResult.length);

    if (explResult.length > 0) {
      const linkAddr = explResult[0].get('_link');
      console.log(`[Guide]   linkAddr:`, linkAddr?.value);

      const [content] = await client.getLinkContents([linkAddr]);
      const contentData = String(content.data);
      console.log(`[Guide]   content:`, contentData.substring(0, 50));

      sections.push({ title: String(title || ''), text: contentData });
    } else {
      console.log(`[Guide]   ERROR: No explanation link found!`);
    }
  }

  console.log('[Guide] Total sections found:', sections.length);
  return sections;
};