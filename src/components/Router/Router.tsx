import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AskAnswer } from '@components/AskAnswer';
import { AskPage } from '@components/AskPage';
import { Layout } from '@components/Layout';
import { routes, DEFAULT_COMMAND_PATH } from '@constants';
import { Action } from '@pages/Action';
import AskMain from '@pages/AskMain/AskMain';
import { Command } from '@pages/Command';
import { Library } from '@pages/Library';
import { Main } from '@pages/Main';

export const Router = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route
          path={routes.MAIN}
          element={
            <Layout>
              <Main />
            </Layout>
          }
        >
          <Route index element={<Navigate to={DEFAULT_COMMAND_PATH} replace />} />
          <Route path={routes.COMMAND} element={<Command />} />
          <Route path={routes.ACTION} element={<Action />} />
          <Route path={routes.LIBRARY} element={<Library />} />
        </Route>

        <Route
          path={routes.ASK_AI}
          element={
            <Layout>
              <AskMain />
            </Layout>
          }
        >
          <Route index element={<AskPage />} />
          <Route path={routes.ASK_AI_ANSWER} element={<AskAnswer />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
