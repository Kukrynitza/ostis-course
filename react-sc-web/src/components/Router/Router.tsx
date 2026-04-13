import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { PrivateRoute, PublicRoute } from '../ProtectedRoute/ProtectedRoute';
import { routes, DEFAULT_COMMAND_PATH } from '@constants';
import { Action } from '@pages/Action';
import { Command } from '@pages/Command';
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
        <Route
          path={routes.MAIN}
          element={
            <PrivateRoute>
              <Layout>
                <Main />
              </Layout>
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to={DEFAULT_COMMAND_PATH} replace />} />
          <Route path={routes.COMMAND} element={<Command />} />
          <Route path={routes.ACTION} element={<Action />} />
          <Route path={routes.LIBRARY} element={<Library />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Suspense>
  );
};
