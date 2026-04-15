import { useEffect, useRef } from 'react';

export const useInterval = (callback: React.EffectCallback, delay: number | null) => {
  const intervalRef = useRef<number | null>(null);
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

      return () => window.clearInterval(intervalRef.current || 0);
    }
  }, [delay]);

  return intervalRef;
};
