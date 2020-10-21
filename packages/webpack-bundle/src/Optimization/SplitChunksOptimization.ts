import {Optimization, WebpackOptimization} from "../Configuration";

export class SplitChunksOptimization extends Optimization {
    constructor(options: WebpackOptimization["splitChunks"]) {
        super({splitChunks: options});
    }
}
