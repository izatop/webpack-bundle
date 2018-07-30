import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class WatchOptions extends ObjectOption<IWebpackValue<"watchOptions">> {
    public get key() {
        return "watchOptions";
    }
}
