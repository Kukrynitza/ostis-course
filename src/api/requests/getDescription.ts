import { TLanguage } from 'ostis-ui-lib';

const MOCK_ANSWERS: Record<string, string> = {
  'что такое синглтон':
    'Синглтон - это множество, содержащее ровно один элемент. В теории множеств синглтон определяется как множество {x}, где x - некоторый объект.',
  'что такое ims':
    'IMS (Intelligent Management System) - интеллектуальная система управления, основанная на технологии OSTIS.',
  'что такое граф':
    'Граф - это математическая структура, состоящая из вершин (узлов) и рёбер (связей) между ними.',
  'что такое остис':
    'OSTIS (Open Semantic Technology for Intelligent Systems) - это технология построения интеллектуальных систем с открытой семантикой.',
  'что такое sc-машина':
    'SC-машина (Semantic Computer Machine) - это программный комплекс для работы с базой знаний на основе семантических сетей.',
  'what is singleton': 'A singleton is a set that contains exactly one element.',
  'what is ims':
    'IMS (Intelligent Management System) is an intelligent management system based on OSTIS technology.',
  'what is a graph':
    'A graph is a mathematical structure consisting of vertices (nodes) and edges (connections) between them.',
  'what is ostis':
    'OSTIS (Open Semantic Technology for Intelligent Systems) is a technology for building intelligent systems with open semantics.',
};

const AVAILABLE_QUESTIONS_RU = [
  'что такое синглтон',
  'что такое граф',
  'что такое отношение',
  'что такое множество',
  'что такое sc-элемент',
];

const AVAILABLE_QUESTIONS_EN = [
  'what is singleton',
  'what is a graph',
  'what is ims',
  'what is ostis',
];

async function searchKB(query: string): Promise<{ answer: string; lowQuality: boolean } | null> {
  try {
    const response = await fetch('/api/kb/search/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, lang: 'ru' }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success && data.found && data.answer) {
        const isLowQuality = data.low_quality === true || data.low_quality === 'true';
        console.log(
          'KB search found answer:',
          data.answer.substring(0, 50) + '...',
          isLowQuality ? '[LOW QUALITY]' : '[HIGH QUALITY]',
        );
        return { answer: data.answer, lowQuality: isLowQuality };
      }
    }
  } catch (error) {
    console.log('KB search not available:', error);
  }
  return null;
}

function getMockAnswer(query: string): string | null {
  const normalizedQuery = query
    .toLowerCase()
    .trim()
    .replace(/[?!.,]+$/, '');

  for (const [key, answer] of Object.entries(MOCK_ANSWERS)) {
    if (normalizedQuery.includes(key)) {
      console.log('Mock answer found for:', key);
      return answer;
    }
  }
  return null;
}

export const getDescriptionById = async (id: string, lang: TLanguage): Promise<string | null> => {
  console.log('AskAI query:', id);

  const normalizedQuery = id.toLowerCase().trim();

  // 1. Search Knowledge Base
  const kbResult = await searchKB(id);

  if (kbResult) {
    // If KB has high quality answer (with definition) -> use it
    if (!kbResult.lowQuality) {
      return kbResult.answer;
    }

    // If KB has low quality answer (just identifier, short) -> check mock
    const mockAnswer = getMockAnswer(id);
    if (mockAnswer) {
      console.log('Using mock answer instead of low quality KB answer');
      return mockAnswer;
    }

    // No mock available -> fallback to KB answer anyway
    return kbResult.answer;
  }

  // 2. Fallback: Check mock answers if KB didn't find anything
  const mockAnswer = getMockAnswer(id);
  if (mockAnswer) {
    return mockAnswer;
  }

  // 3. Generate helpful message
  const availableQuestions = lang === 'ru' ? AVAILABLE_QUESTIONS_RU : AVAILABLE_QUESTIONS_EN;
  const suggestions = availableQuestions
    .slice(0, 5)
    .map((k) => `"${k}"`)
    .join(', ');

  if (lang === 'ru') {
    return `Извините, я не нашёл ответа на ваш вопрос в базе знаний. Попробуйте спросить: ${suggestions}.`;
  } else {
    return `Sorry, I couldn't find an answer in the knowledge base. Try asking: ${suggestions}.`;
  }
};
