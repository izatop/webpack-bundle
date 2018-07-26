import {Bundle} from "../../src";
import * as props from "../../src/Configuration/index";
import {TypeScriptLoader} from "../../src/Loaders";

test("Bundle", () => {
    const module = new props.Module([new TypeScriptLoader()])
        .addRule(new props.ModuleRule({use: ["loader1", "loader2"]}));

    const config = new Bundle(
        module,
        new props.Entry("entry.js"),
        new props.Mode("development"),
        new props.Optimization({
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        name: "vendor",
                        test: /\/node_modules\//,
                    },
                },
            },
        }),
    );

    expect(config.getWebpackConfig())
        .toEqual({
            mode: "development",
            entry: "entry.js",
            module: {
                rules: [
                    {loader: "ts"},
                    {use: ["loader1", "loader2"]},
                ],
            },
            optimization: {
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            name: "vendor",
                            test: /\/node_modules\//,
                        },
                    },
                },
            },
        });
});
