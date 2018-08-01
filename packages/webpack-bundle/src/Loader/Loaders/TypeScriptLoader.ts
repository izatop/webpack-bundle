import {Loader} from "../Loader";

export class TypeScriptLoader extends Loader {
    protected getDefaults() {
        return {
            loader: "ts-loader",
            test: /\.tsx?$/,
        };
    }
}
