import tsImportPluginFactory from "ts-import-plugin";
import {IWebpackValue, Loaders} from "webpack-bundle";

export class TypeScriptCustomLoader extends Loaders.TypeScriptLoader {
    constructor(mode: IWebpackValue<"mode">) {
        super({
            options: {
                transpileOnly: !(mode === "production"),
                getCustomTransformers: () => ({
                    before: [tsImportPluginFactory({
                        libraryDirectory: "es",
                        libraryName: "antd",
                        style: "css",
                    })],
                }),
            },
        });
    }
}
