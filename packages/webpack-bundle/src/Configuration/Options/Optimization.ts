import * as webpack from "webpack";
import {ObjectOption} from "../ObjectOption";

export type WebpackOptimization = Exclude<webpack.Configuration["optimization"], undefined>;

export class Optimization extends ObjectOption<WebpackOptimization> {
    public get key() {
        return "optimization";
    }
}
