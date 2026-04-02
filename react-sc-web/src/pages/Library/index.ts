import { lazy } from 'react';

export const Library = lazy(() => import(/* webpackChunkName: "library" */ './Library'));
