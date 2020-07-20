import * as webpack from "webpack";
import {IWebpackKey, IWebpackValue} from "../IWebpack";
import {Option} from "./Option";

export type OptionType = IWebpackValue<IWebpackKey>;

export class BundleOption<T extends OptionType = OptionType> extends Option<T> {
    public get key() {
        return this.name.replace(/^[A-Z]+/g, (chunk: string) => chunk.toLowerCase());
    }

    public serialize(): webpack.Configuration {
        return {
            [this.key]: this.value,
        };
    }
}
