import classNames from 'classnames';
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { doCommand } from '@api/requests/command';
import { getScnTree } from '@api/requests/scn';
import { scUtils } from '@api/sc';
import { isAxiosError } from '@api/utils';
import ArrowIcon from '@assets/images/goBack.svg';
import { Button } from '@components/Button';
import { Notification } from '@components/Notification';
import {
  DEFAULT_COMMAND_PATH,
  DEFAULT_COMMAND_SYSTEM_ID,
  scgUrl,
  TIMEOUT,
  TIMEOUT_TOAST_ID,
} from '@constants';
import { useErrorToast } from '@hooks/useErrorToast';
import { useLazyTimeout } from '@hooks/useTimeout';
import { IScnNode, Scn as ScnBase, useLanguage, useToast, useTranslate } from 'ostis-ui-lib';

import styles from './Scn.module.css';
import boundaryStyle from '../ErrorBoundary/ErrorBoundary.module.css';

const timeoutText = {
  ru: (
    <>
      Похоже, результат вашего действия содержит большое количество связей и его загрузка может
      выполняться дольше обычного.
      <span className={styles.waitText}>Пожалуйста, подождите...</span>
    </>
  ),
  en: (
    <>
      Result of your action contains a large number of links, loading may take more time.
      <span className={styles.waitText}>Please wait...</span>
    </>
  ),
};

interface IProps {
  action: number;
}

type THintLang = 'ru' | 'en';
type THintText = { ru: string; en: string };

const TOKEN_HINTS: Record<string, THintText> = {
  '=>': {
    ru: '`=>` задает направленную SC-связь от текущего элемента к связанному фрагменту.',
    en: '`=>` defines a directed SC-relation from current element to related fragment.',
  },
  '<-': {
    ru: '`<-` задает связь, направленную в текущий элемент.',
    en: '`<-` defines a relation directed into current element.',
  },
  ':': {
    ru: '`:` фиксирует ролевую или уточняющую привязку в текущей конструкции.',
    en: '`:` marks a role/refinement binding in current construction.',
  },
  '::': {
    ru: '`::` задает усиленную (константную) форму ролевой привязки.',
    en: '`::` marks a stronger (constant) role binding form.',
  },
  ';;': {
    ru: '`;;` завершает SCn-конструкцию.',
    en: '`;;` terminates SCn construction.',
  },
  '...': {
    ru: '`...` обозначает свернутый фрагмент: часть конструкции скрыта.',
    en: '`...` denotes collapsed fragment: part of construction is hidden.',
  },
  '.': {
    ru: 'Точка завершает текущий текстовый или структурный фрагмент.',
    en: 'Dot terminates current textual or structural fragment.',
  },
  '•': {
    ru: 'Маркер элемента списка в развертке SCn-структуры.',
    en: 'List marker in SCn structure expansion.',
  },
  '∈': {
    ru: '`∈` показывает отношение принадлежности элемента множеству.',
    en: '`∈` denotes element-to-set membership relation.',
  },
  '∉': {
    ru: '`∉` показывает отрицание принадлежности элемента множеству.',
    en: '`∉` denotes negative element-to-set membership relation.',
  },
  '=': {
    ru: '`=` связывает ключевой элемент с его содержимым или формой представления.',
    en: '`=` links key element with its content or representation form.',
  },
};

const IDENTIFIER_HINTS: Record<string, THintText> = {
  nrel_main_idtf: {
    ru: '`nrel_main_idtf` — отношение к основному идентификатору элемента.',
    en: '`nrel_main_idtf` — relation to the main identifier of an element.',
  },
  nrel_idtf: {
    ru: '`nrel_idtf` — отношение к дополнительному (не основному) идентификатору.',
    en: '`nrel_idtf` — relation to additional (non-main) identifier.',
  },
  nrel_system_identifier: {
    ru: '`nrel_system_identifier` — отношение к системному идентификатору (sys idtf).',
    en: '`nrel_system_identifier` — relation to system identifier (sys idtf).',
  },
  nrel_answer: {
    ru: '`nrel_answer` — отношение к ответу на вопрос/запрос.',
    en: '`nrel_answer` — relation to answer of a question/request.',
  },
  nrel_definition: {
    ru: '`nrel_definition` — отношение к определению понятия.',
    en: '`nrel_definition` — relation to concept definition.',
  },
  nrel_result: {
    ru: '`nrel_result` — отношение к результату выполнения команды или процедуры.',
    en: '`nrel_result` — relation to command/procedure result.',
  },
  nrel_format: {
    ru: '`nrel_format` — отношение к формату представления данных.',
    en: '`nrel_format` — relation to data representation format.',
  },
  nrel_mimetype: {
    ru: '`nrel_mimetype` — отношение к MIME-типу данных.',
    en: '`nrel_mimetype` — relation to MIME type of data.',
  },
  ui_rrel_command: {
    ru: '`ui_rrel_command` — ролевая метка команды пользовательского интерфейса.',
    en: '`ui_rrel_command` — role label of UI command.',
  },
  ui_rrel_command_arguments: {
    ru: '`ui_rrel_command_arguments` — ролевая группа аргументов UI-команды.',
    en: '`ui_rrel_command_arguments` — role group of UI command arguments.',
  },
  ui_nrel_command_result: {
    ru: '`ui_nrel_command_result` — отношение к результату пользовательской команды.',
    en: '`ui_nrel_command_result` — relation to user command result.',
  },
  ui_nrel_user_answer_formats: {
    ru: '`ui_nrel_user_answer_formats` — допустимые форматы ответа пользователю.',
    en: '`ui_nrel_user_answer_formats` — allowed user answer formats.',
  },
  ui_nrel_user_used_language: {
    ru: '`ui_nrel_user_used_language` — выбранный пользователем рабочий язык.',
    en: '`ui_nrel_user_used_language` — current user language.',
  },
  ui_nrel_user_default_ext_language: {
    ru: '`ui_nrel_user_default_ext_language` — язык вывода по умолчанию для пользователя.',
    en: '`ui_nrel_user_default_ext_language` — default output language for user.',
  },
  ui_command_initiated: {
    ru: '`ui_command_initiated` — состояние: команда запущена.',
    en: '`ui_command_initiated` — state: command started.',
  },
  ui_command_finished: {
    ru: '`ui_command_finished` — состояние: команда завершена.',
    en: '`ui_command_finished` — state: command finished.',
  },
  lang_ru: {
    ru: '`lang_ru` — ключевой узел русского языка.',
    en: '`lang_ru` — keynode of Russian language.',
  },
  lang_en: {
    ru: '`lang_en` — ключевой узел английского языка.',
    en: '`lang_en` — keynode of English language.',
  },
  format_txt: {
    ru: '`format_txt` — текстовый формат данных.',
    en: '`format_txt` — plain text data format.',
  },
  format_html: {
    ru: '`format_html` — HTML-формат данных.',
    en: '`format_html` — HTML data format.',
  },
  format_pdf: {
    ru: '`format_pdf` — PDF-формат данных.',
    en: '`format_pdf` — PDF data format.',
  },
  format_png: {
    ru: '`format_png` — растровое изображение PNG.',
    en: '`format_png` — PNG raster image format.',
  },
  sc_memory: {
    ru: '`sc_memory` — графовая память, хранилище SC-элементов и связей.',
    en: '`sc_memory` — graph memory storing SC-elements and relations.',
  },
};

const PREFIX_HINTS: Array<{ prefix: string; text: THintText }> = [
  {
    prefix: 'nrel_',
    text: {
      ru: 'Префикс `nrel_` обозначает именованное отношение между элементами.',
      en: 'Prefix `nrel_` denotes named relation between elements.',
    },
  },
  {
    prefix: 'rrel_',
    text: {
      ru: 'Префикс `rrel_` обозначает ролевое отношение внутри конструкции.',
      en: 'Prefix `rrel_` denotes role relation inside construction.',
    },
  },
  {
    prefix: 'sc_',
    text: {
      ru: 'Префикс `sc_` относится к базовым понятиям и типам SC-модели.',
      en: 'Prefix `sc_` refers to core concepts and types of SC model.',
    },
  },
  {
    prefix: 'ui_',
    text: {
      ru: 'Префикс `ui_` относится к понятиям и операциям пользовательского интерфейса.',
      en: 'Prefix `ui_` refers to user interface concepts and operations.',
    },
  },
  {
    prefix: 'lang_',
    text: {
      ru: 'Префикс `lang_` обозначает ключевой узел языка.',
      en: 'Prefix `lang_` denotes language keynode.',
    },
  },
  {
    prefix: 'format_',
    text: {
      ru: 'Префикс `format_` обозначает формат содержимого или данных.',
      en: 'Prefix `format_` denotes content/data format.',
    },
  },
];

const STRUCTURE_HINTS: Array<{ pattern: RegExp; text: THintText }> = [
  {
    pattern: /^\{.*\}$/,
    text: {
      ru: '`{ ... }` обозначает структуру или множество связанных элементов.',
      en: '`{ ... }` denotes structure or set of related elements.',
    },
  },
  {
    pattern: /^\[.*\]$/,
    text: {
      ru: '`[ ... ]` задает содержимое ссылочного элемента (текст/данные).',
      en: '`[ ... ]` defines link element content (text/data).',
    },
  },
  {
    pattern: /^\(.*\)$/,
    text: {
      ru: '`( ... )` отображает коннектор между источником и целью.',
      en: '`( ... )` displays connector between source and target.',
    },
  },
];

const getLocalizedText = (text: THintText, lang: THintLang) => (lang === 'ru' ? text.ru : text.en);

const getIdentifierFromText = (text: string): string | null => {
  const token = text.match(/[A-Za-z][A-Za-z0-9_*-]{1,}/)?.[0];
  return token ? token.toLowerCase() : null;
};

const getScnSyntaxHint = (text: string, lang: THintLang) => {
  const normalizedText = text.replace(/\s+/g, ' ').trim();
  if (!normalizedText) return null;

  const exactToken = TOKEN_HINTS[normalizedText];
  if (exactToken) {
    return getLocalizedText(exactToken, lang);
  }

  const tokenEntry = Object.entries(TOKEN_HINTS).find(([token]) => normalizedText.includes(token));
  if (tokenEntry) {
    return getLocalizedText(tokenEntry[1], lang);
  }

  const structureMatch = STRUCTURE_HINTS.find(({ pattern }) => pattern.test(normalizedText));
  if (structureMatch) {
    return getLocalizedText(structureMatch.text, lang);
  }

  const identifier = getIdentifierFromText(normalizedText);
  if (!identifier) return null;

  const exactIdHint = IDENTIFIER_HINTS[identifier];
  if (exactIdHint) {
    return getLocalizedText(exactIdHint, lang);
  }

  const prefixHint = PREFIX_HINTS.find(({ prefix }) => identifier.startsWith(prefix));
  if (prefixHint) {
    return getLocalizedText(prefixHint.text, lang);
  }

  return lang === 'ru'
    ? 'Идентификатор SC-элемента: имя узла, связи или отношения в текущем фрагменте.'
    : 'SC-element identifier: name of node, connector, or relation in current fragment.';
};

export const Scn = ({ action }: IProps) => {
  const [tree, setTree] = useState<IScnNode | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const timeoutRequestCountRef = useRef(0);

  const addError = useErrorToast();
  const { addToast, removeToast } = useToast();

  const translate = useTranslate();
  const lang = useLanguage();
  const navigate = useNavigate();

  const addTimeoutToast = () => {
    addToast(
      <Notification
        type="warning"
        title={{ ru: 'Загрузка большого ответа', en: 'Loading complex result' }}
        // @ts-ignore
        text={timeoutText}
      />,
      {
        position: 'bottomRight',
        id: TIMEOUT_TOAST_ID,
      },
    );
  };

  const { clearTimeout, setTimeout } = useLazyTimeout(addTimeoutToast, TIMEOUT);

  const onRequestStarted = () => {
    setIsLoading(true);
    setTree(null);
  };

  const renderRequestPanel = () => {
    return null;
  };

  const onScnMouseOver = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;

    const hoverTarget = target.closest('span, div, a, p') as HTMLElement | null;
    if (!hoverTarget || hoverTarget.title) return;

    const targetText = hoverTarget.textContent?.trim();
    if (!targetText) return;

    const hint = getScnSyntaxHint(targetText, lang === 'ru' ? 'ru' : 'en');
    if (hint) {
      hoverTarget.title = hint;
    }
  };

  const resetTimeoutToast = useCallback(() => {
    timeoutRequestCountRef.current = 0;
    removeToast(TIMEOUT_TOAST_ID);
    clearTimeout();
  }, [removeToast, clearTimeout]);

  const requestScn = useCallback(async () => {
    setTimeout();
    const scnRes = await getScnTree(action, onRequestStarted);

    if (!scnRes) {
      setTree(null);
      setIsLoading(false);
      clearTimeout();
      return;
    }

    if (!isAxiosError(scnRes)) {
      resetTimeoutToast();
      setTree(scnRes.tree);
      setIsLoading(false);
      return;
    }
    const isTimeoutError =
      scnRes.response?.status === 404 &&
      scnRes.response.data === 'Timeout waiting for result translation';
    if (!isTimeoutError) {
      resetTimeoutToast();
      return addError({ ru: 'Не удалось получить SCn', en: `It's failed to get SCn` });
    }
    timeoutRequestCountRef.current++;
    requestScn();
  }, [setTimeout, action, resetTimeoutToast, addError, translate, clearTimeout]);

  const onInitiateAction = async (addr: number) => {
    const { uiMenuViewFullSemanticNeighborhood } =
      await scUtils.searchKeynodes(DEFAULT_COMMAND_SYSTEM_ID);
    const cmdRes = await doCommand(uiMenuViewFullSemanticNeighborhood.value, addr);

    if (isAxiosError(cmdRes)) {
      setIsLoading(false);
      addError({ ru: 'Не удалось выполнить запрос', en: 'Failed to handle the request' });
      return null;
    }
    return cmdRes.data.action;
  };

  useEffect(() => {
    requestScn();
  }, [requestScn]);

  useEffect(() => {
    return resetTimeoutToast;
  }, [resetTimeoutToast]);

  if (!tree && !isLoading)
    return (
      <div className={boundaryStyle.wrap}>
        <h4>{translate({ ru: 'Понятие было удалено', en: 'Element was deleted' })}</h4>
        <Button
          appearance="secondaryAction"
          className={boundaryStyle.backButton}
          title={translate({
            ru: 'Вернуться на главную страницу',
            en: 'Go back to main page',
          })}
          onClick={() => {
            navigate(DEFAULT_COMMAND_PATH);
          }}
        >
          <ArrowIcon />
          {translate({ ru: 'Вернуться на главную страницу', en: 'Go back to main page' })}
        </Button>
      </div>
    );
  return (
    <div
      onMouseOverCapture={onScnMouseOver}
      title={translate({
        ru: 'Наведите на элементы SCn-кода, чтобы увидеть подсказки по синтаксису',
        en: 'Hover SCn-code elements to see syntax hints',
      })}
    >
      <ScnBase
        tree={tree}
        scgUrl={scgUrl}
        isLoading={isLoading}
        renderRequestPanel={renderRequestPanel}
        onInitiateAction={onInitiateAction}
        action={action}
        className={classNames(styles.container, 'dark-scn')}
      />
    </div>
  );
};
