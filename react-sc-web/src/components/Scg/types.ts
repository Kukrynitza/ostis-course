interface ICommandResponsePayload {
  action: string;
}

export interface IWindowEventData {
  type: string;
  payload?: {
    state?: unknown;
    response?: ICommandResponsePayload;
  };
}

export const enum EWindowEvents {
  deleteScgElement = 'deleteScgElement',
  clearScene = 'clearScene',
  onInitializationFinished = 'onInitializationFinished',
  commandExecuted = 'commandExecuted',
  exportPngResult = 'exportPngResult',
  exportPngError = 'exportPngError',
  exportSvgResult = 'exportSvgResult',
  exportSvgError = 'exportSvgError',
}
