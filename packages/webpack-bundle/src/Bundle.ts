import webpack from "webpack";
import {BundleOption} from "./Configuration/BundleOption";

export class Bundle {
    protected options: BundleOption[] = [];

    constructor(...option: BundleOption[]) {
        this.set(...option);
    }

    public set(...option: BundleOption[]) {
        this.options.push(...option);
    }

    public getWebpackConfig() {
        const config: webpack.Configuration = {};
        for (const option of this.options) {
            Object.assign(config, option.serialize());
        }

        return config;
    }
}
