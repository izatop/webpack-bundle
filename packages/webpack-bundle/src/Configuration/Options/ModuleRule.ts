import webpack from "webpack";
import {Option} from "../Option";

export class ModuleRule<T extends webpack.RuleSetRule = webpack.RuleSetRule> extends Option<T> {
    protected readonly value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }

    public serialize(): T {
        return this.value;
    }
}
