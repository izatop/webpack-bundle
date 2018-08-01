import {Options} from "webpack-bundle";

export class BundleOptimization extends Options.Optimization {
    constructor() {
        super({
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /\/node_modules\//,
                        name: "vendor",
                        chunks: "all",
                        priority: 0,
                    },
                    style: {
                        name: "style",
                        test: /\.css$/,
                        chunks: "all",
                        enforce: true,
                    },
                },
            },
        });
    }
}
