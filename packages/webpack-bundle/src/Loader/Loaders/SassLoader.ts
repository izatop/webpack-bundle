import {Loader} from "../Loader";

export class SassLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.sass/,
            use: [
                {loader: "css"},
                {loader: "sass"},
            ],
        };
    }
}
