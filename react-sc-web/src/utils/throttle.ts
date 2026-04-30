export const throttle = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => ReturnValue,
  delay: number,
) => {
  let isRuning = false;
  let isFirstTime = true;
  return (...args: Args) => {
    if (isFirstTime || !isRuning) {
      func(...args);
      setTimeout(() => {
        isRuning = false;
      }, delay);
    }
    isRuning = true;
    isFirstTime = false;
  };
};
