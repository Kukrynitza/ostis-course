import { generatePath } from 'react-router-dom';
import { routes } from '@constants';

const defaultApiUrl = 'http://localhost:8000';
const defaultScUrl = 'ws://localhost:8090/ws_json';

export const SC_URL = process.env.SC_URL ? process.env.SC_URL : defaultScUrl;
export const API_URL = process.env.API_URL ? process.env.API_URL : defaultApiUrl;

export const DEFAULT_SYSTEM_ID = 'myself' as const;
export const DEFAULT_COMMAND_SYSTEM_ID = 'ui_menu_view_full_semantic_neighborhood' as const;

export const DEFAULT_COMMAND_PATH = generatePath(routes.COMMAND, {
  addr: DEFAULT_SYSTEM_ID,
  commandAddr: DEFAULT_COMMAND_SYSTEM_ID,
  format: 'scn',
});

export const scgUrl = `${API_URL}/scg`;
