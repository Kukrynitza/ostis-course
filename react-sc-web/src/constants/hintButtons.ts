import { getDescriptionById } from '@api/requests/getDescription';

export interface HintButton {
  text: { ru: string; en: string };
}

const STABLE_KB_HINT_BUTTONS: HintButton[] = [
  {
    text: { ru: 'Что такое семантическая окрестность?', en: 'What is semantic neighborhood?' },
  },
  {
    text: { ru: 'Что такое OSTIS?', en: 'What is OSTIS?' },
  },
  {
    text: { ru: 'Что такое SC-память?', en: 'What is SC-memory?' },
  },
  {
    text: { ru: 'Что такое Библиотека компонентов?', en: 'What is components library?' },
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
