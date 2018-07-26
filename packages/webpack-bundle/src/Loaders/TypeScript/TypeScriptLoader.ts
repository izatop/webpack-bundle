import * as webpack from "webpack";
import {Loader} from "../Loader";

export class TypeScriptLoader extends Loader {
    constructor(rule: webpack.RuleSetRule = {}) {
        super({loader: "ts", ...rule});
    }
}
