import * as webpack from "webpack";
import {ObjectOption} from "../ObjectOption";

export class DevServer extends ObjectOption<webpack.WebpackOptionsNormalized["devServer"]> {
    public get key() {
        return "devServer";
    }
}
