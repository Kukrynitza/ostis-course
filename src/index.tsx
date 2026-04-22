import {
  LanguageProvider,
  ClientProvider,
  ScUtilsProvider,
  TLanguage,
  ToastProvider,
  defaultLightTheme,
} from 'ostis-ui-lib';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from '@components/App';
import { store } from '@store/index';

import './assets/styles/index.scss';
import { client } from './api';

const element = document.getElementById('root')!;
const root = createRoot(element);

const getDefaultLanguage = () => {
  const langInLocalStorage = localStorage.getItem('language') as TLanguage;
  const defaultLang = window.navigator.language === 'ru-RU' ? 'ru' : 'en';

  return langInLocalStorage || defaultLang;
};

root.render(
  <StrictMode>
    <LanguageProvider defaultLanguage={getDefaultLanguage()}>
      <Provider store={store}>
        <ClientProvider client={client}>
          <ScUtilsProvider>
            <ToastProvider>
              <BrowserRouter>
                <ThemeProvider theme={defaultLightTheme}>
                  <App />
                </ThemeProvider>
              </BrowserRouter>
            </ToastProvider>
          </ScUtilsProvider>
        </ClientProvider>
      </Provider>
    </LanguageProvider>
  </StrictMode>,
);
