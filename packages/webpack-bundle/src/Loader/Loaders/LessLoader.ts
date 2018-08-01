import {Loader} from "../Loader";

export class LessLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.less$/,
            use: [
                {loader: "css"},
                {loader: "less"},
            ],
        };
    }
}
