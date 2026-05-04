import { getDescriptionById } from '@api/requests/getDescription';

export interface HintButton {
  text: { ru: string; en: string };
}

export const hintButtons: HintButton[] = [
  {
    text: { ru: 'Что такое синглтон?', en: 'What is singleton?' },
  },
  {
    text: { ru: 'Что такое IMS?', en: 'What is IMS?' },
  },
  {
    text: { ru: 'Что такое граф?', en: 'What is a graph?' },
  },
  {
    text: { ru: 'Расскажи про историю развития IMS', en: 'Tell me about the history of IMS' },
  },
];

export const getHintButtonHandler = (
  query: string,
  lang: 'ru' | 'en',
): (() => Promise<string | null>) => {
  const matchedButton = hintButtons.find((button) => button.text[lang] == query.trim());

  if (matchedButton) {
    return async () => {
      const answer = await getDescriptionById(query, lang);
      return answer;
    };
  } else {
    return () => Promise.resolve(null);
  }
};
