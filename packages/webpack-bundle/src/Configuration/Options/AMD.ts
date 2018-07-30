import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class AMD extends ObjectOption<IWebpackValue<"amd">> {
    public get key() {
        return "amd";
    }
}
