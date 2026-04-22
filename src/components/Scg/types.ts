export interface ITarget {
  element: HTMLElement;
  addr?: number;
}

export interface IWindowEventData {
  type: string;
  payload?: Record<string, any>;
}

export const enum EWindowEvents {
  deleteScgElement = 'deleteScgElement',
  clearScene = 'clearScene',
  onInitializationFinished = 'onInitializationFinished',
  commandExecuted = 'commandExecuted',
}
