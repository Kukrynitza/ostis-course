import { TLanguage } from '@model';

import type { IGuideSection } from './guideTypes';

/** Тексты совпадают с ui_guide_for_beginners.scs — показываем, если запрос к БЗ не вернул разделы. */
const SECTIONS: Record<TLanguage, IGuideSection[]> = {
  ru: [
    {
      title: 'Навигация по графам',
      text: 'База знаний Метасистемы OSTIS представляет собой семантический граф, состоящий из узлов (понятий) и связей между ними. Каждый узел — это элемент знания: понятие, объект, действие или отношение. Для навигации кликните на любой узел в области просмотра — система покажет его семантическую окрестность, то есть все связанные с ним элементы. Таким образом вы можете последовательно исследовать базу знаний, переходя от одного понятия к другому.',
    },
    {
      title: 'Контекстное меню узлов',
      text: 'При нажатии правой кнопкой мыши на любой узел открывается контекстное меню с доступными командами. Команда "Что это такое?" показывает полную семантическую окрестность выбранного элемента. Вы также можете зафиксировать узел как аргумент для последующих команд — это позволяет выполнять действия с конкретным элементом, например, найти связанные понятия или просмотреть информацию о нём в разных форматах.',
    },
    {
      title: 'Форматы просмотра',
      text: 'Результаты запросов отображаются в двух форматах. SCn — текстовое представление в виде дерева, где узлы и связи показаны в структурированном текстовом виде. Этот формат удобен для детального изучения связей и чтения содержимого. SCg — графическое представление в виде диаграммы, где узлы отображаются как точки, а связи — как линии между ними. Этот формат удобен для визуального анализа структуры знаний. Переключайтесь между форматами с помощью кнопок в боковой панели.',
    },
    {
      title: 'Библиотека компонентов',
      text: 'Библиотека компонентов OSTIS содержит каталог многократно используемых компонентов: базы знаний, решатели задач, интерфейсные элементы и подсистемы. Для перехода в библиотеку нажмите соответствующую кнопку в боковой панели. Вы можете искать компоненты по имени и фильтровать их по типу. Клик по карточке компонента открывает подробную информацию: описание, тип, ссылку на репозиторий и пояснение к компоненту.',
    },
    {
      title: 'Поиск',
      text: 'Поле поиска в боковой панели позволяет находить элементы базы знаний по подстроке. При вводе текста система ищет совпадения в содержимом текстовых ссылок (контента узлов). Результаты поиска появляются с небольшой задержкой для оптимизации производительности. Выберите найденный элемент — система выполнит команду просмотра и покажет его семантическую окрестность в текущем формате (SCn или SCg).',
    },
    {
      title: 'История навигации',
      text: 'Панель истории в боковой панели сохраняет все ваши переходы между элементами базы знаний. Каждый выполненный запрос добавляется в начало списка. Клик по элементу истории позволяет быстро вернуться к ранее просмотренному результату. Текущий элемент выделен в списке. Это удобно при глубокой навигации по графу знаний, когда нужно вернуться к ранее изученному понятию.',
    },
    {
      title: 'Управление профилем',
      text: 'В правом верхнем углу интерфейса расположено меню профиля пользователя. Если вы не авторизованы, отображается кнопка "Вход" — нажмите её для перехода на страницу авторизации. После входа отображается аватар с первой буквой вашего имени. При нажатии на аватар открывается выпадающее меню, где отображается ваше имя пользователя и доступна команда "Выход". Функция выхода из системы удаляет данные сессии и возвращает вас на страницу входа. Авторизация позволяет персонализировать работу с системой и сохранять историю действий.',
    },
    {
      title: 'Переключение темы',
      text: 'Рядом с меню профиля находится переключатель темы оформления. При нажатии последовательно переключаются три режима: светлая тема (солнце), тёмная тема (луна) и системная тема (автоматический режим, который подстраивается под настройки вашей операционной системы). При выборе системной темы интерфейс автоматически адаптируется к светлому или тёмному режиму в зависимости от текущих настроек вашего устройства. Выбранная тема сохраняется в памяти браузера и применяется при следующем посещении.',
    },
    {
      title: 'Выбор языка',
      text: 'Крайний справа элемент в верхней панели — переключатель языка интерфейса. Доступны два варианта: русский (Ru) и английский (En). При выборе языка весь интерфейс системы, включая меню, кнопки, подсказки и сообщения, переключается на выбранный язык. Выбор языка сохраняется в памяти браузера, поэтому при следующем входе в систему будет использован ранее выбранный язык. Русский и английский языки доступны для всей функциональности системы.',
    },
    {
      title: 'Навигация между страницами',
      text: 'В боковой панели, под строкой поиска, расположены кнопки переключения между основными страницами системы. Кнопка с изображением структуры (SCn) открывает главную страницу с отображением семантической сети знаний. Кнопка с изображением книжки открывает Библиотеку компонентов — каталог доступных для установки компонентов OSTIS. Кнопка со значком вопроса открывает Справку для начинающего — руководство по использованию системы. Активная страница выделена визуально. Эти кнопки позволяют быстро переключаться между основными режимами работы.',
    },
    {
      title: 'Структура разделов',
      text: 'Раздел "Разделы" в боковой панели отображает иерархическую структуру базы знаний Метасистемы OSTIS. При разворачивании секции отображаются основные разделы базы знаний: компоненты, подсистемы, базы знаний и другие. Каждый раздел может содержать вложенные подразделы. Нажатие на название раздела выполняет команду просмотра его содержимого в текущем формате (SCn или SCg). Для администраторов доступна кнопка добавления новых разделов. Структура разделов помогает понять организацию знаний в системе и быстро перейти к нужному разделу.',
    },
    {
      title: 'Установка компонентов',
      text: 'В Библиотеке компонентов каждая карточка содержит кнопку "Установить". При нажатии на эту кнопку система инициирует процесс установки выбранного компонента в вашу Метасистему. В зависимости от типа компонента установка может происходить автоматически через агент установки или путём перехода на страницу репозитория GitHub для ручной установки. После успешной установки компонент становится доступен в системе и может использоваться для решения соответствующих задач. Процесс установки может занять некоторое время в зависимости от размера и сложности компонента.',
    },
    {
      title: 'Информация о компоненте',
      text: 'При клике на карточку компонента в Библиотеке открывается модальное окно с подробной информацией. В этом окне отображаются: название компонента, его тип (база знаний, решатель задач, интерфейс или подсистема), описание назначения, список зависимостей от других компонентов, ссылка на репозиторий GitHub, имя автора и способ установки. Модальное окно можно закрыть нажатием на кнопку X в правом верхнем углу или кликом вне окна. Эта информация помогает понять возможности компонента перед его установкой.',
    },
  ],
  en: [
    {
      title: 'Navigation by graphs',
      text: 'The knowledge base of the OSTIS Metasystem is a semantic graph consisting of nodes (concepts) and connections between them. Each node is an element of knowledge: a concept, object, action, or relation. To navigate, click on any node in the view area — the system will show its semantic neighborhood, i.e., all related elements. This way you can sequentially explore the knowledge base, moving from one concept to another.',
    },
    {
      title: 'Node context menu',
      text: 'Right-clicking on any node opens a context menu with available commands. The "What is this?" command shows the full semantic neighborhood of the selected element. You can also fix a node as an argument for subsequent commands — this allows you to perform actions with a specific element, such as finding related concepts or viewing information about it in different formats.',
    },
    {
      title: 'View formats',
      text: 'Query results are displayed in two formats. SCn — a textual representation as a tree, where nodes and connections are shown in structured text form. This format is convenient for detailed study of connections and reading content. SCg — a graphical representation as a diagram, where nodes are displayed as points and connections as lines between them. This format is convenient for visual analysis of knowledge structure. Switch between formats using the buttons in the side panel.',
    },
    {
      title: 'Component library',
      text: 'The OSTIS component library contains a catalog of reusable components: knowledge bases, problem solvers, interface elements, and subsystems. To access the library, click the corresponding button in the side panel. You can search components by name and filter them by type. Clicking on a component card opens detailed information: description, type, repository link, and explanation.',
    },
    {
      title: 'Search',
      text: 'The search field in the side panel allows you to find knowledge base elements by substring. When you type text, the system searches for matches in the content of text links (node content). Search results appear with a slight delay for performance optimization. Select a found element — the system will execute a view command and show its semantic neighborhood in the current format (SCn or SCg).',
    },
    {
      title: 'Navigation history',
      text: 'The history panel in the side panel saves all your transitions between knowledge base elements. Each executed query is added to the beginning of the list. Clicking on a history item allows you to quickly return to a previously viewed result. The current element is highlighted in the list. This is convenient when deeply navigating the knowledge graph and you need to return to a previously studied concept.',
    },
    {
      title: 'Profile management',
      text: 'The user profile menu is located in the upper right corner of the interface. If you are not logged in, the "Login" button is displayed — click it to go to the authorization page. After logging in, an avatar with the first letter of your name is displayed. Clicking on the avatar opens a dropdown menu showing your username and the "Logout" command. The logout function removes session data and returns you to the login page. Authorization allows you to personalize work with the system and preserve action history.',
    },
    {
      title: 'Theme switching',
      text: 'Next to the profile menu is the theme toggle button. When clicked, it cycles through three modes: light theme (sun), dark theme (moon), and system theme (auto mode that adapts to your operating system settings). When system theme is selected, the interface automatically adapts to light or dark mode depending on your device\'s current settings. The selected theme is stored in the browser\'s memory and applied on the next visit.',
    },
    {
      title: 'Language selection',
      text: 'The rightmost element in the top panel is the interface language toggle. Two options are available: Russian (Ru) and English (En). When a language is selected, the entire system interface, including menus, buttons, hints, and messages, switches to the chosen language. The language preference is stored in the browser memory, so the previously selected language will be used on the next visit. Russian and English languages are available for all system functionality.',
    },
    {
      title: 'Page navigation',
      text: 'In the side panel, below the search field, there are buttons for switching between the main pages of the system. The button with the structure image (SCn) opens the main page displaying the semantic knowledge network. The button with the book image opens the Component Library — a catalog of available OSTIS components. The button with the question mark icon opens the Guide for Beginners — a manual on using the system. The active page is visually highlighted. These buttons allow you to quickly switch between the main working modes.',
    },
    {
      title: 'Sections structure',
      text: 'The "Sections" section in the side panel displays the hierarchical structure of the OSTIS Metasystem knowledge base. When expanded, the section displays the main sections of the knowledge base: components, subsystems, knowledge bases, and others. Each section may contain nested subsections. Clicking on a section name executes a view command for its content in the current format (SCn or SCg). For administrators, a button to add new sections is available. The sections structure helps understand the organization of knowledge in the system and quickly navigate to the required section.',
    },
    {
      title: 'Component installation',
      text: 'In the Component Library, each card contains an "Install" button. When clicking this button, the system initiates the installation process for the selected component into your Metasystem. Depending on the component type, installation can occur automatically through the installation agent or by navigating to the GitHub repository page for manual installation. After successful installation, the component becomes available in the system and can be used to solve relevant tasks. The installation process may take some time depending on the size and complexity of the component.',
    },
    {
      title: 'Component details',
      text: 'Clicking on a component card in the Library opens a modal window with detailed information. This window displays: component name, its type (knowledge base, problem solver, interface, or subsystem), description of purpose, list of dependencies on other components, link to GitHub repository, author\'s name, and installation method. The modal can be closed by clicking the X button in the upper right corner or by clicking outside the window. This information helps understand the component\'s capabilities before installation.',
    },
  ],
};

export function getStaticGuideSections(lang: TLanguage): IGuideSection[] {
  return SECTIONS[lang].map((s) => ({ ...s }));
}
