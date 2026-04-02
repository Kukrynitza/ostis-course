import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { routes, DEFAULT_COMMAND_PATH } from '@constants';
import { Action } from '@pages/Action';
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
      </Routes>
    </Suspense>
  );
};
