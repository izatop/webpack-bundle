import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class Stats extends ObjectOption<IWebpackValue<"stats">> {
    public get key() {
        return "stats";
    }
}
