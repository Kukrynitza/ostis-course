export const debounce = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue,
  wait: number,
) => {
  let timerId: NodeJS.Timeout;

  const clear = () => {
    clearTimeout(timerId);
  };
  const debounced = (...args: Args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), wait);
  };

  return [debounced, clear] as const;
};

export const debounceWithReturn = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue,
  wait: number,
) => {
  let timerId: NodeJS.Timeout;

  return (...args: Args) => {
    return new Promise<ReturnValue>((resolve) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        resolve(func(...args));
      }, wait);
    });
  };
};
