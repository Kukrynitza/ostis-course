import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AskAnswer } from '@components/AskAnswer';
import { AskPage } from '@components/AskPage';
import { PrivateLayoutRoute, PublicRoute } from '@components/ProtectedRoute';
import { routes, DEFAULT_COMMAND_PATH } from '@constants';
import { Action } from '@pages/Action';
import { AskMain } from '@pages/AskMain/index';
import { Command } from '@pages/Command';
import { Guide } from '@pages/Guide';
import { Library } from '@pages/Library';
import { Login } from '@pages/Login';
import { Main } from '@pages/Main';
import { Register } from '@pages/Register';

export const Router = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <Routes>
        <Route
          path={routes.LOGIN}
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path={routes.REGISTER}
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route element={<PrivateLayoutRoute />}>
          <Route path={routes.MAIN} element={<Main />}>
            <Route index element={<Navigate to={DEFAULT_COMMAND_PATH} replace />} />
            <Route path={routes.COMMAND} element={<Command />} />
            <Route path={routes.ACTION} element={<Action />} />
            <Route path={routes.LIBRARY} element={<Library />} />
            <Route path={routes.GUIDE} element={<Guide />} />
          </Route>
          <Route path={routes.ASK_AI} element={<AskMain />}>
            <Route index element={<AskPage />} />
            <Route path={routes.ASK_AI_ANSWER} element={<AskAnswer />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to={routes.LOGIN} replace />} />
      </Routes>
    </Suspense>
  );
};
