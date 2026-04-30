import { lazy } from 'react';

export const AskAnswer = lazy(() =>
  import(/* webpackChunkName: "ask-answer" */ './AskAnswer').then((m) => ({
    default: m.AskAnswer,
  })),
);
