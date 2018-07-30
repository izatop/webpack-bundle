import webpack from "webpack";
import {ObjectOption} from "../ObjectOption";

export class Optimization extends ObjectOption<webpack.Options.Optimization> {
    public get key() {
        return "optimization";
    }
}
