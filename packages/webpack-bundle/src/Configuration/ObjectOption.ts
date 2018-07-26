import {IWebpackKey, IWebpackValue} from "../IWebpack";
import {BundleOption} from "./BundleOption";

export abstract class ObjectOption<T extends IWebpackValue<IWebpackKey>> extends BundleOption<T> {}
