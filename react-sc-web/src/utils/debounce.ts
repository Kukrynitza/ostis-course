export const debounce = <F extends (...args: any[]) => any>(func: F, wait: number) => {
  let timerId: NodeJS.Timeout;

  const clear = () => {
    clearTimeout(timerId);
  };
  const debounced = (...args: Parameters<F>) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), wait);
  };

  return [debounced, clear] as const;
};

export const debounceWithReturn = <F extends (...args: any[]) => any>(func: F, wait: number) => {
  let timerId: NodeJS.Timeout;

  return (...args: Parameters<F>) => {
    return new Promise<ReturnType<F>>((resolve) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        resolve(func(...args));
      }, wait);
    });
  };
};
