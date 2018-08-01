import webpack from "webpack";
import {Option} from "../Option";

export class ModuleRule<T extends webpack.RuleSetRule = webpack.RuleSetRule> extends Option<T> {
    protected readonly value: T;

    constructor(value: T) {
        super();

        // @ts-ignore
        // @see why https://github.com/Microsoft/TypeScript/pull/13288
        this.value = {...this.getDefaults(), ...value};
    }

    public serialize(): T {
        return this.value;
    }

    protected getDefaults() {
        return {};
    }
}
