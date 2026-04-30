import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Layout } from '@components/Layout';
import { routes } from '@constants';
import { selectIsAuthenticated } from '@store/commonSlice';

interface IProtectedRouteProps {
  children: ReactNode;
}

interface IPublicRouteProps {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: IProtectedRouteProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={routes.LOGIN} state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export const PublicRoute = ({ children }: IPublicRouteProps) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated) {
    return <Navigate to={routes.MAIN} replace />;
  }

  return <>{children}</>;
};

/** Один экземпляр Layout для MAIN и Ask AI — без полного перемонтирования сайдбара при смене вкладки. */
export const PrivateLayoutRoute = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={routes.LOGIN} state={{ from: location }} replace />;
  }

  return <Layout />;
};
