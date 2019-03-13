import * as webpack from "webpack";
import {BundleOption} from "./Configuration/BundleOption";

export class Bundle {
    protected options: BundleOption[] = [];

    constructor(...option: BundleOption[]) {
        this.set(...option);
    }

    public set(...option: BundleOption[]) {
        this.options.push(...option);
    }

    public get<T extends BundleOption>(type: new() => T): T | undefined {
        return this.options.find((item) => item instanceof type) as T;
    }

    public getWebpackConfig() {
        const config: webpack.Configuration = {};
        for (const option of this.options) {
            Object.assign(config, option.serialize());
        }

        return config;
    }
}
