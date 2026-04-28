import { SnakeToCamelCase } from './types';

export const snakeToCamelCase = <Str extends string>(str: Str): SnakeToCamelCase<Str> =>
  str.replace(/_(\w)/g, (_, p1) => p1.toUpperCase()) as SnakeToCamelCase<Str>;

type FormDataValue = string | Blob;

const toFormDataValue = (value: unknown): FormDataValue => {
  if (value instanceof Blob) return value;
  return String(value);
};

export const objectToFormData = (obj: Record<string, unknown>) => {
  const formData = new FormData();
  Object.keys(obj).forEach((key) => formData.append(key, toFormDataValue(obj[key])));
  return formData;
};

export const wait = (time: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), time));

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shiftMap = (map: Map<unknown, unknown>, to = 1) => {
  if (to < 1) return;

  let isDone = false;
  let ind = 0;
  const mapIterator = map.keys();
  while (ind < to && !isDone) {
    const elem = mapIterator.next();
    isDone = !!elem.done;
    map.delete(elem.value);
    ind++;
  }
};
