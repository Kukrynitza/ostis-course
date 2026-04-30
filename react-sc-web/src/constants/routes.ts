export const MAIN = '/' as const;
export const COMMAND = '/c/:commandAddr/a/:addr/:format' as const;
export const ACTION = '/q/:action/:format' as const;
export const LIBRARY = '/l/' as const;
export const GUIDE = '/guide/' as const;
export const LOGIN = '/login' as const;
export const REGISTER = '/register' as const;
export const ASK_AI = '/ask-ai/' as const;
export const ASK_AI_ANSWER = 'answer' as const;

export const DEFAULT_SYSTEM_ID = 'myself' as const;
export const DEFAULT_COMMAND_SYSTEM_ID = 'ui_menu_view_full_semantic_neighborhood' as const;
