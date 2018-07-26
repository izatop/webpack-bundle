import * as webpack from "webpack";
import {Optimization} from "../Configuration";

export class SplitChunksOptimization extends Optimization {
    constructor(options: webpack.Options.SplitChunksOptions) {
        super({splitChunks: options});
    }
}
