import * as webpack from "webpack";
import {ObjectOption} from "../ObjectOption";
import {ModuleRule} from "./ModuleRule";

export class Module extends ObjectOption<webpack.ModuleOptions> {
    protected readonly value: webpack.ModuleOptions;

    constructor(protected rules: ModuleRule[] = [], value?: webpack.ModuleOptions) {
        super({rules: []});
        this.value = {
            rules: [],
            ...value,
        };
    }

    public get key() {
        return "module";
    }

    public addRule(...rule: ModuleRule[]) {
        this.rules.push(...rule);
        return this;
    }

    public serialize() {
        const module: webpack.ModuleOptions = {
            ...this.value,
            rules: [
                ...this.rules.map((rule) => rule.serialize()),
                ...this.value.rules as (webpack.RuleSetRule | "...")[],
            ],
        };

        return {
            [this.key]: module,
        };
    }
}
