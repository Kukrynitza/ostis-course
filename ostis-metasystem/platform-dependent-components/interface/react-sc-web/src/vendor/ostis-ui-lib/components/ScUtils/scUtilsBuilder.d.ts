import { TLanguage } from "../Language/types";
import { ScAddr, ScClient } from 'ts-sc-client';
interface IProps {
    client: ScClient;
}
export declare const scUtilsBuilder: ({ client }: IProps) => {
    searchKeynodes: import("../../utils/searchKeynodes").TSearchKeynodes;
    getId: (addr: ScAddr, lang: TLanguage) => Promise<string>;
    getMainIdLinkAddr: (addr: ScAddr, lang: TLanguage) => Promise<ScAddr | null>;
    getMainId: (addr: ScAddr, lang: TLanguage) => Promise<string | number | null>;
    getSystemId: (addr: ScAddr) => Promise<string | null>;
    addrOrSystemIdAddr: (addrOrSystemId: string | number) => Promise<number>;
    getResult: (actionNode: ScAddr) => Promise<ScAddr>;
    generateLink: (item: string) => Promise<ScAddr | null>;
};
export {};
