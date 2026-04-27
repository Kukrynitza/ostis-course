import classNames from 'classnames';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { scUtils } from '@api';
import { removeFromCache } from '@api/requests/scn';
import { ConfirmAction } from '@components/ConfirmAction';
import { scgUrl } from '@constants';
import { useErrorToast } from '@hooks/useErrorToast';
import { useScNavigation } from '@hooks/useScNavigation';
import { addRequest } from '@store/requestHistorySlice';
import {
  langToKeynode,
  snakeToCamelCase,
  useBooleanState,
  useLanguage,
  useTranslate,
  Popup,
  Spinner,
} from 'ostis-ui-lib';
import { confirmClearScenePopupContent, confirmDeletePopupContent } from './constants';
import styles from './Scg.module.css';

import { EWindowEvents, IWindowEventData } from './types';

interface IProps {
  action?: number;
  className?: string;
  show?: boolean;
}

const SPINER_COLOR = '#5896C0';
const EXPORT_TIMEOUT = 10000;

const downloadFile = (dataUrl: string, filename: string) => {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export const Scg: FC<IProps> = ({ action, className, show = false }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isConfirmDeletePopupShown, showConfirmDeletePopup, hideConfirmDeletePopup] =
    useBooleanState(false);
  const [isConfirmClearScenePopupShown, showConfirmClearScenePopup, hideConfirmClearScenePopup] =
    useBooleanState(false);
  const ref = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lang = useLanguage();
  const dispatch = useDispatch();
  const scNavigation = useScNavigation();
  const addError = useErrorToast();
  const translate = useTranslate();

  const onCommandExecuted = useCallback(
    (data: IWindowEventData) => {
      if (!data.payload || !data.payload['state'] || !data.payload['response']) return;
      dispatch(addRequest({ action: Number(data.payload.response.action) }));
      scNavigation.goToActiveFormatAction(data.payload.response.action);
    },
    [dispatch, scNavigation],
  );

  const clearExportTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const handleExport = useCallback(
    (mode: 'png' | 'svg') => {
      if (!ref.current?.contentWindow) return;
      setIsExporting(true);
      const msgType = mode === 'png' ? 'exportPng' : 'exportSvg';
      ref.current.contentWindow.postMessage({ type: msgType }, '*');
      timeoutRef.current = setTimeout(() => {
        setIsExporting(false);
        addError(translate({ ru: 'Ошибка экспорта', en: 'Export error' }));
      }, EXPORT_TIMEOUT);
    },
    [addError, translate],
  );

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const handleMessage = (event: MessageEvent<IWindowEventData>) => {
      switch (event.data?.type) {
        case EWindowEvents.onInitializationFinished:
          setIsReady(true);
          setIsLoading(false);
          break;
        case EWindowEvents.deleteScgElement:
          showConfirmDeletePopup();
          break;
        case EWindowEvents.clearScene:
          showConfirmClearScenePopup();
          break;
        case EWindowEvents.commandExecuted:
          onCommandExecuted(event.data);
          break;
        case EWindowEvents.exportPngResult: {
          clearExportTimeout();
          const pngData = (event.data as unknown as Record<string, unknown>)['data'] as string;
          if (pngData) downloadFile(pngData, 'scg.png');
          setIsExporting(false);
          break;
        }
        case EWindowEvents.exportPngError:
          clearExportTimeout();
          setIsExporting(false);
          addError(translate({ ru: 'Ошибка экспорта PNG', en: 'PNG export error' }));
          break;
        case EWindowEvents.exportSvgResult: {
          clearExportTimeout();
          const svgData = (event.data as unknown as Record<string, unknown>)['data'] as string;
          if (svgData)
            downloadFile('data:text/plain;charset=utf-8,' + encodeURIComponent(svgData), 'scg.svg');
          setIsExporting(false);
          break;
        }
        case EWindowEvents.exportSvgError:
          clearExportTimeout();
          setIsExporting(false);
          addError(translate({ ru: 'Ошибка экспорта SVG', en: 'SVG export error' }));
          break;
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
      clearExportTimeout();
    };
  }, [
    action,
    onCommandExecuted,
    showConfirmDeletePopup,
    showConfirmClearScenePopup,
    addError,
    translate,
    clearExportTimeout,
  ]);

  useEffect(() => {
    (async () => {
      if (!isReady || !show || !action) return;
      const iframe = ref.current;
      if (!iframe) return;
      const { ...rest } = await scUtils.searchKeynodes(langToKeynode[lang]);
      const activeLangKeynode = rest[snakeToCamelCase(langToKeynode[lang])];
      removeFromCache(action);
      iframe.contentWindow &&
        iframe.contentWindow.postMessage(
          { type: 'renderScg', addr: action, lang: activeLangKeynode.value },
          '*',
        );
    })();
  }, [isReady, action, show, lang]);

  return (
    <>
      {isConfirmDeletePopupShown && (
        <Popup onClose={hideConfirmDeletePopup}>
          <ConfirmAction
            onComplete={() =>
              ref.current &&
              ref.current.contentWindow &&
              ref.current.contentWindow.postMessage({ type: 'deleteScgElement' }, '*')
            }
            onClose={hideConfirmDeletePopup}
            title="Удаление"
            content={confirmDeletePopupContent}
            completeBtnText="Удалить"
          />
        </Popup>
      )}
      {isConfirmClearScenePopupShown && (
        <Popup onClose={hideConfirmClearScenePopup}>
          <ConfirmAction
            onComplete={() =>
              ref.current &&
              ref.current.contentWindow &&
              ref.current.contentWindow.postMessage({ type: 'clearScene' }, '*')
            }
            onClose={hideConfirmClearScenePopup}
            title="Очистка пространства"
            content={confirmClearScenePopupContent}
            completeBtnText="Очистить"
          />
        </Popup>
      )}
      <div className={classNames(styles.wrap, show && styles.wrapShow, className)}>
        {isLoading && <Spinner className={styles.spinner} appearance={SPINER_COLOR} />}
        {show && isReady && action && (
          <div className={styles.exportBar}>
            <button
              className={styles.exportButton}
              disabled={isExporting}
              onClick={() => handleExport('png')}
            >
              {isExporting ? '...' : 'PNG'}
            </button>
            <span className={styles.exportDivider} />
            <button
              className={styles.exportButton}
              disabled={isExporting}
              onClick={() => handleExport('svg')}
            >
              {isExporting ? '...' : 'SVG'}
            </button>
          </div>
        )}
        <iframe className={styles.frame} src={scgUrl} ref={ref} title="SCg codes" />
      </div>
    </>
  );
};
