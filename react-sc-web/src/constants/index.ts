export * as routes from './routes';
export { FEATURES } from './features';
export * from './common';
export * from './scn';
export * from './texts';
export { hintButtons, getHintButtonHandler } from './hintButtons';
export type { HintButton } from './hintButtons';

/** Единый акцент спиннеров с остальным UI (см. Command, Scg). */
export const SPINER_COLOR = '#5896C0' as const;
