import { lazy } from 'react';

export const AskPage = lazy(() =>
  import(/* webpackChunkName: "ask-page" */ './AskPage').then((m) => ({ default: m.AskPage })),
);
