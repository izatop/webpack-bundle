import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class Plugins extends ObjectOption<IWebpackValue<"plugins">> {
    public get key() {
        return "plugins";
    }
}
