import {IWebpackKey, IWebpackValue} from "../IWebpack";
import {BundleOption} from "./BundleOption";

export abstract class ScalarOption<K extends IWebpackKey,
    T extends IWebpackValue<K> = IWebpackValue<K>> extends BundleOption<T> {
}
