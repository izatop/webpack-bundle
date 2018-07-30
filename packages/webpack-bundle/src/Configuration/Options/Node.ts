import {IWebpackValue} from "../../IWebpack";
import {ObjectOption} from "../ObjectOption";

export class Node extends ObjectOption<IWebpackValue<"node">> {
    public get key() {
        return "node";
    }
}
