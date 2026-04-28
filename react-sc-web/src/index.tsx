import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager, ThemeProvider as ScThemeProvider } from 'styled-components';
import { App } from '@components/App';
import { store } from '@store/index';
import { ThemeProvider, useThemeContext } from '@themes/index';
import {
  LanguageProvider,
  ClientProvider,
  ScUtilsProvider,
  TLanguage,
  ToastProvider,
} from 'ostis-ui-lib';

import './assets/styles/index.css';
import { client } from './api';

const element = document.getElementById('root');
if (!element) {
  throw new Error('Root element #root was not found');
}
const root = createRoot(element);
const blockedDomProps = new Set(['isOptionsOpen', 'isLoading', 'isHTML', 'expanded', 'position']);

const shouldForwardStyledProp = (propName: string) => {
  // Filter known non-DOM style-only props from vendor components.
  if (blockedDomProps.has(propName)) return false;
  return true;
};

const getDefaultLanguage = () => {
  const langInLocalStorage = localStorage.getItem('language') as TLanguage;
  const defaultLang = window.navigator.language === 'ru-RU' ? 'ru' : 'en';

  return langInLocalStorage || defaultLang;
};

const AppWithTheme = () => {
  const { styledTheme } = useThemeContext();

  return (
    <ScThemeProvider theme={styledTheme}>
      <App />
    </ScThemeProvider>
  );
};

root.render(
  <StrictMode>
    <LanguageProvider defaultLanguage={getDefaultLanguage()}>
      <Provider store={store}>
        <ClientProvider client={client}>
          <ScUtilsProvider>
            <ToastProvider>
              <StyleSheetManager shouldForwardProp={shouldForwardStyledProp}>
                <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                  <ThemeProvider>
                    <AppWithTheme />
                  </ThemeProvider>
                </BrowserRouter>
              </StyleSheetManager>
            </ToastProvider>
          </ScUtilsProvider>
        </ClientProvider>
      </Provider>
    </LanguageProvider>
  </StrictMode>,
);
