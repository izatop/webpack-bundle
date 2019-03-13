import * as webpack from "webpack";
import {ModuleRule} from "../Configuration";

export class Loader<T extends webpack.RuleSetRule = webpack.RuleSetRule> extends ModuleRule {
}
