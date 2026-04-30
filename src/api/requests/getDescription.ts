import { TLanguage } from 'ostis-ui-lib';

const AVAILABLE_QUESTIONS_RU = [
  'что такое граф',
  'что такое sc-память',
  'что такое декомпозиция',
];

const AVAILABLE_QUESTIONS_EN = ['what is a graph', 'what is sc-memory', 'what is decomposition'];

async function searchKB(query: string, lang: TLanguage): Promise<{ answer: string; lowQuality: boolean } | null> {
  try {
    const response = await fetch('/api/kb/search/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, lang }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.success && data.found && data.answer) {
        const isLowQuality = data.low_quality === true || data.low_quality === 'true';
        return { answer: data.answer, lowQuality: isLowQuality };
      }
    }
  } catch {
    return null;
  }
  return null;
}

export const getDescriptionById = async (id: string, lang: TLanguage): Promise<string | null> => {
  const kbResult = await searchKB(id, lang);

  if (kbResult) {
    return kbResult.answer;
  }

  const availableQuestions = lang === 'ru' ? AVAILABLE_QUESTIONS_RU : AVAILABLE_QUESTIONS_EN;
  const suggestions = availableQuestions.map((k) => `"${k}"`).join(', ');

  if (lang === 'ru') {
    return `В базе знаний не найдено определения по этому запросу. Примеры: ${suggestions}.`;
  }
  return `No matching definition was found in the knowledge base. Examples: ${suggestions}.`;
};
