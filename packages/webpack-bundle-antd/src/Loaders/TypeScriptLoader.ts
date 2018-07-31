import * as webpack from "webpack";
import {Loader} from "webpack-bundle";

export class TypeScriptLoader extends Loader {
    constructor(options: webpack.RuleSetQuery = {}) {
        super({
            options,
            loader: "ts",
            test: /\.tsx?/,
        });
    }
}
