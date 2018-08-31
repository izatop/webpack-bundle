import {Loader} from "../Loader";

export class HtmlLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.html/,
            use: "html-loader",
        };
    }
}
