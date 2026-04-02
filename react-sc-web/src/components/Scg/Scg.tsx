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
} from 'ostis-ui-lib';
import { confirmClearScenePopupContent, confirmDeletePopupContent } from './constants';
import { ExportBar, ExportButton, Frame, StyledSpinner, Wrap } from './styled';

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

const svgToPng = (svgString: string): Promise<Blob | null> => {
  return new Promise((resolve) => {
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        URL.revokeObjectURL(url);
        resolve(null);
        return;
      }
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (blob) => resolve(blob),
        'image/png',
      );
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };

    img.src = url;
  });
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

export const Scg: FC<IProps> = ({ action, className, show = false }) => {
  const [isReady, setIsReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportMode, setExportMode] = useState<'png' | 'svg' | null>(null);
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
      setExportMode(mode);
      ref.current.contentWindow.postMessage({ type: 'exportSvg' }, '*');
      timeoutRef.current = setTimeout(() => {
        setIsExporting(false);
        setExportMode(null);
        addError(translate({ ru: 'Ошибка экспорта', en: 'Export error' }));
      }, EXPORT_TIMEOUT);
    },
    [addError, translate],
  );

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;

    const handleMessage = async (event: MessageEvent<IWindowEventData>) => {
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
        case EWindowEvents.exportSvgResult: {
          clearExportTimeout();
          const svgData = (event.data as unknown as Record<string, unknown>)['data'] as string;
          if (!svgData) {
            setIsExporting(false);
            setExportMode(null);
            return;
          }
          if (exportMode === 'png') {
            const pngBlob = await svgToPng(svgData);
            if (pngBlob) {
              downloadBlob(pngBlob, 'scg.png');
            } else {
              addError(translate({ ru: 'Ошибка конвертации PNG', en: 'PNG conversion error' }));
            }
          } else {
            downloadFile(
              'data:text/plain;charset=utf-8,' + encodeURIComponent(svgData),
              'scg.svg',
            );
          }
          setIsExporting(false);
          setExportMode(null);
          break;
        }
          if (exportMode === 'png') {
            try {
              const pngData = await svgToPng(svgData);
              downloadFile(pngData, 'scg.png');
            } catch {
              addError(translate({ ru: 'Ошибка конвертации PNG', en: 'PNG conversion error' }));
            }
          } else {
            downloadFile('data:text/plain;charset=utf-8,' + encodeURIComponent(svgData), 'scg.svg');
          }
          setIsExporting(false);
          setExportMode(null);
          break;
        }
        case EWindowEvents.exportSvgError:
          clearExportTimeout();
          setIsExporting(false);
          setExportMode(null);
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
    exportMode,
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
      <Wrap show={show} className={className}>
        {isLoading && <StyledSpinner appearance={SPINER_COLOR} />}
        {show && isReady && action && (
          <ExportBar>
            <ExportButton disabled={isExporting} onClick={() => handleExport('png')}>
              {isExporting ? '...' : 'PNG'}
            </ExportButton>
            <ExportButton disabled={isExporting} onClick={() => handleExport('svg')}>
              {isExporting ? '...' : 'SVG'}
            </ExportButton>
          </ExportBar>
        )}
        <Frame src={scgUrl} ref={ref} title="SCg codes" />
      </Wrap>
    </>
  );
};
