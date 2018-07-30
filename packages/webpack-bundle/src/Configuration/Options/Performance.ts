import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class Performance extends ObjectOption<IWebpackValue<"performance">> {
    public get key() {
        return "performance";
    }
}
