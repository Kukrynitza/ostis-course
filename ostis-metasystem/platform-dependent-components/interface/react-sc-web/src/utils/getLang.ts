import { scUtils } from '@api/sc';
import { langToKeynode, snakeToCamelCase, TLanguage } from 'ostis-ui-lib';

export const getLang = async (lang: TLanguage) => {
  const keynodes = await scUtils.searchKeynodes(langToKeynode[lang]);
  const foundLang = keynodes[snakeToCamelCase(langToKeynode[lang])];
  return foundLang.value;
};
