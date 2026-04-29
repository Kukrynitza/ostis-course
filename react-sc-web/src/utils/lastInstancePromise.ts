import { nanoid } from 'nanoid';

/**
 * Returns whether async function passed to the params is last in unresolved promises stack.
 *
 * @param func
 * @returns
 */
export const lastInstancePromise = <Args extends unknown[], ReturnValue>(
  func: (...args: Args) => Promise<ReturnValue>,
) => {
  let calls: string[] = [];

  return async (...args: Args) => {
    const id = nanoid(5);
    calls.push(id);

    const res = await func(...args);

    calls = calls.filter((callId) => callId !== id);

    const isLast = calls.length === 0;

    return { res, isLast };
  };
};
