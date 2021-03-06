import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class Resolve extends ObjectOption<IWebpackValue<"resolve">> {
    public get key() {
        return "resolve";
    }
}
