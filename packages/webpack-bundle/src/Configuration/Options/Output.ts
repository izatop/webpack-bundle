import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class Output extends ObjectOption<IWebpackValue<"output">> {
    public get key() {
        return "output";
    }
}
