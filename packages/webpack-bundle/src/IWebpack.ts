import {Configuration} from "webpack";

export type IWebpackKey = keyof Configuration;
export type IWebpackValue<K extends IWebpackKey = IWebpackKey> = Configuration[K];
