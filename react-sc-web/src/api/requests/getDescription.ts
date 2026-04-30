import { ScAddr, ScTemplate, ScType } from 'ts-sc-client';
import { client, isAxiosError, scUtils } from '@api';
import { TLanguage } from 'ostis-ui-lib';

import { doCommand } from './command';

/** Примеры для подсказок при отсутствии ответа — держать в соответствии с реальной БЗ (см. scripts/kb-concept-count-instructions.txt). */
const SUGGESTED_EXAMPLE_QUERIES_RU = [
  'что такое граф',
  'что такое sc-память',
  'что такое декомпозиция',
];

const SUGGESTED_EXAMPLE_QUERIES_EN = [
  'what is a graph',
  'what is sc-memory',
  'what is decomposition',
];

type KBAnswer = { answer: string; lowQuality: boolean };
type AskIntent = 'definition' | 'action' | 'navigation' | 'other';
type KBQuality = 'strong' | 'low' | 'weak';
type KBSearchResult = { answer: string; quality: KBQuality };

const QUERY_ALIASES: Record<string, string[]> = {
  ostis: ['остис', 'метасистема ostis', 'что такое метасистема ostis'],
  ims: ['имс'],
  'что такое ims': ['что такое имс'],
  'что такое имс': ['что такое ims'],
  'что такое декомпозиция': ['декомпозиция'],
  'what is decomposition': ['декомпозиция', 'decomposition'],
  'что такое система': ['система'],
  'что такое граф': ['граф'],
  'что такое семантическая окрестность': [
    'семантическая окрестность',
    'семантическая окрестность sc-элемента',
  ],
  'what is semantic neighborhood': ['semantic neighborhood'],
  'что такое внешний язык': ['внешний язык', 'external language'],
  'что такое external language': ['что такое внешний язык', 'external language'],
  'что такое дискретная математика': ['дискретная математика', 'что такое дикретная математика'],
  'что такое дикретная математика': ['что такое дискретная математика'],
  семантика: ['семантическая окрестность', 'что такое семантическая окрестность'],
  'что такое семантика': ['что такое семантическая окрестность', 'семантическая окрестность'],
  'семантическая сеть': ['semantic network', 'knowledge graph'],
  'что такое семантическая сеть': ['semantic network', 'knowledge graph'],
  'sc-элемент': ['sc element', 'sc_element'],
  'что такое sc-элемент': ['sc element', 'sc_element'],
  'sc элемент': ['sc-элемент', 'sc element', 'sc_element'],
  'что такое sc элемент': ['что такое sc-элемент', 'sc element', 'sc_element'],
  'sc-память': ['sc memory', 'sc-memory'],
  'что такое sc-память': ['sc-память', 'sc memory', 'sc-memory'],
  'what is sc-memory': ['sc memory', 'sc-memory', 'sc-память'],
  'what is sc memory': ['sc memory', 'sc-memory', 'sc-память'],
  'semantic code': ['sc code', 'sc-code', 'semantic cod'],
  'what is semantic code': ['semantic code', 'sc code', 'sc-code'],
  'что такое semantic code': ['что такое sc-код', 'sc-код', 'semantic code'],
  'библиотек компонентов': ['библиотека компонентов', 'библиотека компонент'],
  'что такое библиотек компонентов': [
    'что такое библиотека компонентов',
    'библиотека компонентов',
    'library of components',
  ],
  'что такое библиотека компонент': ['что такое библиотека компонентов', 'библиотека компонентов'],
  'что такое библиотека компонентов': ['библиотека компонентов', 'library of components'],
  'что такое ostis': ['что такое остис', 'что такое метасистема ostis'],
  'что такое остис': ['что такое метасистема ostis'],
  'what is остис': ['what is ostis'],
};

const normalizeQuery = (query: string): string =>
  normalizeSpaces(
    query
      .toLowerCase()
      .replace(/ё/g, 'е')
      .replace(/[«»"'`]/g, '')
      .replace(/[?!.,;:]+$/g, '')
      .replace(/^(ну|так|ладно|пожалуйста|пж|pls)\s+/g, ''),
  );

const normalizeSpaces = (value: string): string => value.replace(/\s+/g, ' ').trim();

const ACTION_HINTS_RU = [
  'покажи',
  'построй',
  'найди',
  'запусти',
  'выполни',
  'проверь',
  'создай',
  'удали',
  'добавь',
  'открой',
];

const NAVIGATION_HINTS_RU = ['где', 'как открыть', 'как перейти', 'как найти', 'где находится'];

const DEFINITION_HINTS_RU = ['что такое', 'кто такой', 'что это', 'определи', 'определение'];
const DEFINITION_LIKE_MAX_WORDS = 4;
const ACTION_ENTITY_PREFIXES_RU = [
  'покажи',
  'построй',
  'найди',
  'открой',
  'покажи семантическую окрестность',
  'найди семантическую окрестность',
];
const NAVIGATION_ENTITY_PREFIXES_RU = [
  'где находится',
  'где',
  'как открыть',
  'как перейти к',
  'как найти',
];

const startsWithIntentHint = (query: string, hint: string): boolean =>
  query === hint || query.startsWith(`${hint} `);

const detectIntent = (query: string, lang: TLanguage): AskIntent => {
  const normalized = normalizeQuery(query);
  if (!normalized) return 'other';

  if (lang === 'ru') {
    if (DEFINITION_HINTS_RU.some((hint) => startsWithIntentHint(normalized, hint))) {
      return 'definition';
    }
    if (ACTION_HINTS_RU.some((hint) => startsWithIntentHint(normalized, hint))) return 'action';
    if (NAVIGATION_HINTS_RU.some((hint) => startsWithIntentHint(normalized, hint)))
      return 'navigation';
  } else {
    if (
      normalized.startsWith('what is ') ||
      normalized.startsWith('who is ') ||
      normalized.startsWith('define ')
    ) {
      return 'definition';
    }
    if (
      normalized.startsWith('show ') ||
      normalized.startsWith('build ') ||
      normalized.startsWith('run ') ||
      normalized.startsWith('find ')
    ) {
      return 'action';
    }
    if (normalized.startsWith('where ') || normalized.startsWith('how to open '))
      return 'navigation';
  }

  if (lang === 'ru') {
    const words = normalized.split(' ').filter(Boolean);
    if (
      words.length > 0 &&
      words.length <= DEFINITION_LIKE_MAX_WORDS &&
      !ACTION_HINTS_RU.some((hint) => startsWithIntentHint(normalized, hint)) &&
      !NAVIGATION_HINTS_RU.some((hint) => startsWithIntentHint(normalized, hint))
    ) {
      return 'definition';
    }
  }

  return 'other';
};

const fixCommonQueryTyposRu = (text: string): string =>
  text
    .replace(/сематническ/gi, 'семантическ')
    .replace(/окретсност/gi, 'окрестност')
    .replace(/идетификатор/gi, 'идентификатор')
    .replace(/дикретн/gi, 'дискретн')
    .replace(/библиотек\s+компонентов?\b/gi, 'библиотека компонентов')
    .replace(/библиотека\s+компонент\b/gi, 'библиотека компонентов');

const buildQueryCandidates = (query: string, lang: TLanguage): string[] => {
  const normalized = normalizeQuery(query);
  const candidates = new Set<string>();

  if (normalized) candidates.add(normalized);
  if (normalizeSpaces(query)) candidates.add(normalizeSpaces(query));

  if (lang === 'ru') {
    if (normalized && !normalized.startsWith('что такое ')) {
      candidates.add(`что такое ${normalized}`);
    }
  } else {
    if (normalized && !normalized.startsWith('what is ')) {
      candidates.add(`what is ${normalized}`);
    }
  }

  const directAliases = QUERY_ALIASES[normalized];
  if (directAliases) {
    directAliases.forEach((alias) => candidates.add(alias));
  }

  for (const [key, aliases] of Object.entries(QUERY_ALIASES)) {
    if (normalized.includes(key)) {
      aliases.forEach((alias) => {
        candidates.add(normalized.replace(key, alias));
      });
    }
  }

  return Array.from(candidates).filter((item) => item.length > 1);
};

const buildDefinitionCandidates = (query: string, lang: TLanguage): string[] => {
  const normalized = normalizeQuery(query);
  const candidates = new Set<string>(buildQueryCandidates(query, lang));

  if (lang === 'ru') {
    if (!normalized.startsWith('что такое ') && normalized) {
      candidates.add(`что такое ${normalized}`);
    }
    if (normalized.startsWith('кто такой ')) {
      candidates.add(`что такое ${normalized.replace(/^кто такой\s+/g, '')}`);
    }
  } else {
    if (!normalized.startsWith('what is ') && normalized) {
      candidates.add(`what is ${normalized}`);
    }
  }

  return Array.from(candidates).filter(Boolean);
};

const canonicalizeDefinitionLikeQueryRu = (query: string): string => {
  const normalized = normalizeQuery(query);
  if (!normalized) return normalized;
  if (DEFINITION_HINTS_RU.some((hint) => startsWithIntentHint(normalized, hint))) return normalized;
  return `что такое ${normalized}`;
};

const buildGeneralCandidates = (query: string, lang: TLanguage): string[] => {
  const normalized = normalizeQuery(query);
  const candidates = new Set<string>(buildQueryCandidates(query, lang));

  if (lang === 'ru') {
    candidates.delete(`что такое ${normalized}`);
  } else {
    candidates.delete(`what is ${normalized}`);
  }

  return Array.from(candidates).filter((item) => item.length > 1);
};

const cleanupTopic = (value: string): string =>
  normalizeSpaces(
    value
      .replace(/^мне\s+/i, '')
      .replace(/^пожалуйста\s+/i, '')
      .replace(/^(для|про|о|об)\s+/i, ''),
  );

const extractTopicFromIntentQuery = (
  query: string,
  intent: AskIntent,
  lang: TLanguage,
): string | null => {
  const normalized = normalizeQuery(query);
  if (!normalized) return null;

  const prefixes =
    lang === 'ru'
      ? intent === 'action'
        ? ACTION_ENTITY_PREFIXES_RU
        : NAVIGATION_ENTITY_PREFIXES_RU
      : intent === 'action'
        ? ['show', 'build', 'run', 'find', 'open']
        : ['where', 'how to open', 'how to find'];

  for (const prefix of prefixes) {
    if (normalized.startsWith(prefix)) {
      const topic = cleanupTopic(normalized.slice(prefix.length));
      if (topic.length >= 2) return topic;
    }
  }

  return null;
};

const searchNodeByIdentifier = async (
  linkAddr: ScAddr,
  identification: ScAddr,
): Promise<ScAddr | null> => {
  const nodeAlias = '_node';
  const template = new ScTemplate();

  template.quintuple(
    [ScType.Unknown, nodeAlias],
    ScType.VarCommonArc,
    linkAddr,
    ScType.VarPermPosArc,
    identification,
  );

  const result = await client.searchByTemplate(template);
  if (!result.length) return null;
  return result[0].get(nodeAlias);
};

/** Дополнительные строки для поиска ссылок в БЗ (варианты дефиса, регистр, EN). */
const expandIdentifierLookupVariants = (candidates: string[]): string[] => {
  const out = new Set<string>();
  for (const raw of candidates) {
    const n = normalizeQuery(raw);
    const t = raw.trim();
    if (n.length > 1) out.add(n);
    if (t.length > 1) out.add(t);

    if (/sc[-\s‑]?память/i.test(n) || /sc[-\s‑]?память/i.test(t)) {
      [
        'sc-память',
        'sc‑память',
        'sc память',
        'SC-память',
        'Sc-память',
        'sc memory',
        'sc-memory',
        'SC memory',
      ].forEach((s) => out.add(s));
    }
    if (n.includes('декомпозиц')) {
      ['декомпозиция', 'что такое декомпозиция', 'nrel_decomposition'].forEach((s) => out.add(s));
    }
    if (/семантическ\w*\s+окрестност/i.test(n) || /семантическ\w*\s+окрестност/i.test(t)) {
      [
        'семантическая окрестность',
        'семантическая окрестность sc-элемента',
        'семантическая окрестность sc элемента',
        'семантическая окрестность sc-элемент',
        'что такое семантическая окрестность',
        'semantic neighborhood',
        'semantic neighborhood of sc-element',
        'semantic_neighborhood',
      ].forEach((s) => out.add(s));
    }
  }
  return [...out].filter((s) => s.length > 1);
};

const resolveAddrByText = async (text: string): Promise<ScAddr | null> => {
  const normalized = normalizeQuery(text);
  if (!normalized) return null;

  const candidates = expandIdentifierLookupVariants(
    Array.from(
      new Set([
        normalized,
        text.trim(),
        normalized.replace(/^что такое\s+/i, ''),
        normalized.replace(/^what is\s+/i, ''),
      ]),
    ).filter((value) => value.length > 1),
  );

  const { nrelMainIdtf, nrelSystemIdentifier } = await scUtils.searchKeynodes(
    'nrel_system_identifier',
    'nrel_main_idtf',
  );

  for (const candidate of candidates) {
    const [linkAddrs] = await client.searchLinksByContents([candidate]);
    if (!linkAddrs.length) continue;

    const systemAddr = await searchNodeByIdentifier(linkAddrs[0], nrelSystemIdentifier);
    if (systemAddr) return systemAddr;

    const mainAddr = await searchNodeByIdentifier(linkAddrs[0], nrelMainIdtf);
    if (mainAddr) return mainAddr;
  }

  return null;
};

const getCommandPathAnswer = async (
  query: string,
  intent: AskIntent,
  lang: TLanguage,
): Promise<string | null> => {
  if (intent !== 'action' && intent !== 'navigation') return null;

  const topic = extractTopicFromIntentQuery(query, intent, lang);
  if (!topic) return null;

  const resolvedAddr = await resolveAddrByText(topic);
  if (!resolvedAddr) return null;

  return getDescriptionByAddr(resolvedAddr.value);
};

const searchKbWithPriority = async (
  candidates: string[],
  lang: TLanguage,
): Promise<KBSearchResult | null> => {
  let lowQualityKbAnswer: string | null = null;
  let weakLowQualityAnswer: string | null = null;

  for (const candidate of candidates) {
    const kbResult = await searchKB(candidate, lang);
    if (!kbResult) continue;
    if (!kbResult.lowQuality) return { answer: kbResult.answer, quality: 'strong' };
    const isWeak =
      kbResult.answer.includes('Ближайшие понятия в базе') ||
      kbResult.answer.includes('Явное определение по этому запросу не найдено') ||
      kbResult.answer.startsWith('Понятие найдено в базе знаний:');
    if (isWeak) {
      if (!weakLowQualityAnswer) weakLowQualityAnswer = kbResult.answer;
      continue;
    }
    if (!lowQualityKbAnswer) lowQualityKbAnswer = kbResult.answer;
  }

  if (lowQualityKbAnswer) return { answer: lowQualityKbAnswer, quality: 'low' };
  if (weakLowQualityAnswer) return { answer: weakLowQualityAnswer, quality: 'weak' };
  return null;
};

const cleanAnswerText = (answer: string): string => {
  const withoutServicePrefix = answer
    .replace(/^Понятие найдено в базе знаний:\s*/i, '')
    .replace(/^Явное определение по этому запросу не найдено\.\s*/i, '');

  const cutoffIndex = withoutServicePrefix.indexOf('Ближайшие понятия в базе:');
  const withoutCandidates =
    cutoffIndex >= 0 ? withoutServicePrefix.slice(0, cutoffIndex) : withoutServicePrefix;

  return normalizeSpaces(
    withoutCandidates
      .replace(/\s+([,.!?;:])/g, '$1')
      .replace(/([.!?]){2,}/g, '$1')
      .replace(/\.{2,}/g, '.'),
  );
};

const limitToTwoSentences = (text: string): string => {
  if (!text) return text;
  const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  if (sentences.length <= 2) return text;
  return `${sentences.slice(0, 2).join(' ')}.`;
};

const postProcessKbAnswer = (answer: string, lang: TLanguage): string => {
  const cleaned = cleanAnswerText(answer);
  if (!cleaned) return answer;
  if (lang !== 'ru') return cleaned;
  const limited = limitToTwoSentences(cleaned);
  if (limited.length > 260) {
    const firstSentence = limited.split(/(?<=[.!?])\s+/).filter(Boolean)[0];
    return firstSentence ?? limited;
  }
  return limited;
};

const tryResolveFromScSummary = async (
  candidates: string[],
  lang: TLanguage,
): Promise<string | null> => {
  const cleanedCandidates = Array.from(
    new Set(candidates.map((item) => normalizeQuery(item)).filter((item) => item.length > 1)),
  );

  for (const candidate of cleanedCandidates) {
    const addr = await resolveAddrByText(candidate);
    if (!addr) continue;
    const summary = await getDescriptionByAddr(addr.value);
    if (summary) return postProcessKbAnswer(summary, lang);
  }

  return null;
};

async function searchKB(query: string, lang: TLanguage): Promise<KBAnswer | null> {
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
  const idResolved = lang === 'ru' ? fixCommonQueryTyposRu(id) : id;
  const intent = detectIntent(idResolved, lang);
  const definitionSeed =
    lang === 'ru' && intent === 'definition'
      ? canonicalizeDefinitionLikeQueryRu(idResolved)
      : idResolved;
  const definitionCandidates = buildDefinitionCandidates(definitionSeed, lang);
  const generalCandidates = buildGeneralCandidates(idResolved, lang);

  const topicFromIntent = extractTopicFromIntentQuery(idResolved, intent, lang);
  if (intent === 'action' || intent === 'navigation') {
    const commandPathAnswer = await getCommandPathAnswer(idResolved, intent, lang);
    if (commandPathAnswer) return commandPathAnswer;

    if (topicFromIntent) {
      const topicDefinitionCandidates = buildDefinitionCandidates(topicFromIntent, lang);
      const topicAnswer = await searchKbWithPriority(topicDefinitionCandidates, lang);
      if (topicAnswer && topicAnswer.quality !== 'weak') {
        return postProcessKbAnswer(topicAnswer.answer, lang);
      }
    }
  }

  if (intent === 'definition') {
    const summaryFirst = await tryResolveFromScSummary(definitionCandidates, lang);
    if (summaryFirst) return summaryFirst;

    const answer = await searchKbWithPriority(definitionCandidates, lang);
    if (answer && answer.quality !== 'weak') {
      return postProcessKbAnswer(answer.answer, lang);
    }
    if (answer?.quality === 'weak') {
      const weakText = postProcessKbAnswer(answer.answer, lang);
      if (weakText.length >= 48) return weakText;
    }
  } else {
    const answerFromGeneral = await searchKbWithPriority(generalCandidates, lang);
    if (answerFromGeneral && answerFromGeneral.quality !== 'weak') {
      return postProcessKbAnswer(answerFromGeneral.answer, lang);
    }
    const answerFromDefinitions = await searchKbWithPriority(definitionCandidates, lang);
    if (answerFromDefinitions && answerFromDefinitions.quality !== 'weak') {
      return postProcessKbAnswer(answerFromDefinitions.answer, lang);
    }
    const summaryAnswer = await tryResolveFromScSummary(
      [...generalCandidates, ...definitionCandidates],
      lang,
    );
    if (summaryAnswer) return summaryAnswer;
  }

  if (lang === 'ru') {
    if (intent === 'action') {
      return 'Не удалось выполнить запрос как действие.';
    }
    if (intent === 'navigation') {
      return 'Навигационный запрос не дал результата.';
    }
    return 'В базе знаний не найдено определения по этому запросу.';
  } else {
    return 'No matching definition was found in the knowledge base.';
  }
};

export const getWhatIsIMS = async () => {
  return getDescriptionById('что такое ims', 'ru');
};

export const getHistoryOfIMS = async () => {
  return getDescriptionById('история развития ims', 'ru');
};

export const getWhatIsGraph = async () => {
  return getDescriptionById('что такое граф', 'ru');
};

export const getWhatIsSemanticNeighborhood = async () => {
  return getDescriptionById('что такое семантическая окрестность', 'ru');
};

export const getWhatIsSetTheory = async () => {
  return getDescriptionById('что такое теория множеств', 'ru');
};

export const getDescriptionByAddr = async (elementAddr: number) => {
  const { uiMenuSummary } = await scUtils.searchKeynodes('ui_menu_summary');

  const commandResult = await doCommand(uiMenuSummary.value, elementAddr);

  if (isAxiosError(commandResult)) return null;

  const questionNode = commandResult.data.action;
  const answer = await scUtils.getResult(new ScAddr(questionNode));

  if (!answer) return null;

  const contents = await client.getLinkContents([answer]);
  const content = contents[0].data;

  return String(content);
};
