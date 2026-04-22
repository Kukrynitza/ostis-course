import { TLanguage, TTexts } from 'ostis-ui-lib';

export const hintButtons: { text: TTexts; handler: () => Promise<string | null> }[] = [
  {
    text: { ru: 'Что такое синглтон?', en: 'What is singleton?' },
    handler: () =>
      Promise.resolve(
        'Синглтон - это множество, содержащее ровно один элемент. В теории множеств синглтон определяется как множество {x}, где x - некоторый объект. Свойства: мощность = 1, имеет ровно один элемент.',
      ),
  },
  {
    text: { ru: 'Что такое IMS?', en: 'What is IMS' },
    handler: () =>
      Promise.resolve(
        'IMS (Intelligent Management System) - интеллектуальная система управления, основанная на технологии OSTIS. Обеспечивает семантическую обработку знаний и автоматическое решение задач.',
      ),
  },
  {
    text: { ru: 'Что такое граф?', en: 'What is a graph?' },
    handler: () =>
      Promise.resolve(
        'Граф - это математическая структура, состоящая из вершин (узлов) и рёбер (связей) между ними. Графы бывают ориентированные и неориентированные, взвешенные и невзвешенные.',
      ),
  },
  {
    text: { ru: 'Расскажи про историю развития IMS', en: 'Tell me about the history of IMS ' },
    handler: () =>
      Promise.resolve(
        'История развития IMS неразрывно связана с развитием технологии OSTIS. Система была разработана для обеспечения интеллектуального управления знаниями в распределённых системах.',
      ),
  },
];

export const getHintButtonHandler = (
  query: string,
  lang: TLanguage,
): (() => Promise<string | null>) => {
  const matchedButton = hintButtons.find((button) => button.text[lang] == query.trim());

  if (matchedButton) {
    return matchedButton.handler;
  } else {
    return () => Promise.resolve(null);
  }
};
