import {Loader} from "../Loader";

export class CssLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.css$/,
            use: "css",
        };
    }
}
