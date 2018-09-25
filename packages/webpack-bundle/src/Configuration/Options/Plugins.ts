import {Plugin} from "webpack";
import {ObjectOption} from "../ObjectOption";

export class Plugins extends ObjectOption<Plugin[]> {
    protected readonly value: Plugin[] = [];

    constructor(value: Plugin[] = []) {
        super();
        this.value = value;
    }

    public get key() {
        return "plugins";
    }

    public add(plugin: Plugin) {
        this.value.push(plugin);
        return this;
    }

    public get() {
        return this.value;
    }

    public replace(plugin: Plugin) {
        const index = this.value
            .findIndex((p) => p instanceof plugin.constructor);

        if (index > -1) {
            this.value[index] = plugin;
        } else {
            this.value.push(plugin);
        }

        return this;
    }
}
