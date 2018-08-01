import {Loader} from "../Loader";

export class StyleLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        };
    }
}
