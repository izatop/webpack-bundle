import webpack from "webpack";
import {ObjectOption} from "../ObjectOption";
import {ModuleRule} from "./ModuleRule";

export class Module extends ObjectOption<webpack.Module> {
    protected readonly value: webpack.Module;

    constructor(protected rules: ModuleRule[] = [], value?: webpack.Module) {
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
        const module: webpack.Module = {
            ...this.value,
            rules: [...this.rules.map((rule) => rule.serialize()), ...this.value.rules],
        };

        return {
            [this.key]: module,
        };
    }
}
