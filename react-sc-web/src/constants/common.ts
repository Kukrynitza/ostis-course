import { generatePath } from 'react-router-dom';
import { routes } from '@constants';

const defaultApiUrl = '';
const defaultScUrl = 'ws://localhost:8090/ws_json';

export const SC_URL = process.env.SC_URL ? process.env.SC_URL : defaultScUrl;

/** Пустая строка в .env → относительные URL и прокси dev-server (см. webpack DefinePlugin). */
function resolveApiUrl(): string {
  const raw = typeof process.env.API_URL === 'string' ? process.env.API_URL.trim() : '';
  if (raw === '') return defaultApiUrl;
  const devUi =
    typeof window !== 'undefined' &&
    (window.location.origin === 'http://localhost:3000' ||
      window.location.origin === 'http://127.0.0.1:3000');
  const isLocalBackend8000 = /^https?:\/\/(?:localhost|127\.0\.0\.1):8000\/?$/i.test(raw);
  if (devUi && isLocalBackend8000) {
    return defaultApiUrl;
  }
  return raw;
}

export const API_URL = resolveApiUrl();

export const DEFAULT_SYSTEM_ID = 'myself' as const;
export const DEFAULT_COMMAND_SYSTEM_ID = 'ui_menu_view_full_semantic_neighborhood' as const;

export const DEFAULT_COMMAND_PATH = generatePath(routes.COMMAND, {
  addr: DEFAULT_SYSTEM_ID,
  commandAddr: DEFAULT_COMMAND_SYSTEM_ID,
  format: 'scn',
});

export const scgUrl = `${API_URL}/scg`;
