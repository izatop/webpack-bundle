import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class ResolveLoader extends ObjectOption<IWebpackValue<"resolveLoader">> {
    public get key() {
        return "resolveLoader";
    }
}
