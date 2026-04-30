import { getDescriptionById } from '@api/requests/getDescription';

export interface HintButton {
  text: { ru: string; en: string };
}

const STABLE_KB_HINT_BUTTONS: HintButton[] = [
  {
    text: { ru: 'Что такое граф?', en: 'What is a graph?' },
  },
  {
    text: { ru: 'Что такое sc-память?', en: 'What is sc-memory?' },
  },
  {
    text: { ru: 'Что такое декомпозиция?', en: 'What is decomposition?' },
  },
];

export const hintButtons: HintButton[] = STABLE_KB_HINT_BUTTONS;

export const getHintButtonHandler = (
  query: string,
  lang: 'ru' | 'en',
): (() => Promise<string | null>) => {
  return async () => {
    return getDescriptionById(query, lang);
  };
};
