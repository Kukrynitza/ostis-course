import { lazy } from 'react';

export const Action = lazy(() => import(/* webpackChunkName: "action" */ './Action'));
