import {Bundle, Loaders} from "../../../src";
import * as props from "../../../src/Configuration";

test("Bundle", () => {
    const module = new props.Module([
        new Loaders.Loader({
            test: /\.tsx?$/,
            loader: "ts",
            options: {
                transpileOnly: true,
            },
        }),
    ])
        .addRule(new props.ModuleRule({use: ["loader1", "loader2"]}));

    const entry = new props.Entry("entry.js");
    const config = new Bundle(
        module,
        entry,
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
                    {loader: "ts", test: /\.tsx?$/, options: {transpileOnly: true}},
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

    expect(config.get(props.Entry))
        .toEqual(entry);
});
