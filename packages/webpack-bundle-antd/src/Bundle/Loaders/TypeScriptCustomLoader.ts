import {IWebpackValue, Loaders} from "webpack-bundle";
import {getCustomTransformers} from "./functions";

export class TypeScriptCustomLoader extends Loaders.TypeScriptLoader {
    constructor(mode: IWebpackValue<"mode">) {
        super({
            options: {
                transpileOnly: !(mode === "production"),
                getCustomTransformers,
            },
        });
    }
}
