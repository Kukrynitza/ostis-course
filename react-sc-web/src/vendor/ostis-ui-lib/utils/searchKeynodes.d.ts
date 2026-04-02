import { SnakeToCamelCase } from "../model/utils";
import { ScAddr, ScClient } from 'ts-sc-client';
export type TSearchKeynodes = <K extends [string, ...string[]]>(...keynodes: K) => Promise<KeynodesToObject<K>>;
type KeynodesToObject<T extends string[]> = string[] extends T ? Record<string, ScAddr> : T extends [infer First, ...infer Rest] ? Rest extends [string, ...string[]] ? First extends string ? Record<SnakeToCamelCase<First>, ScAddr> & KeynodesToObject<Rest> : KeynodesToObject<Rest> : First extends string ? Record<SnakeToCamelCase<First>, ScAddr> : Record<string, never> : Record<string, never>;
export declare const searchKeynodesBuilder: (client: ScClient, cacheSize?: number) => TSearchKeynodes;
export {};
