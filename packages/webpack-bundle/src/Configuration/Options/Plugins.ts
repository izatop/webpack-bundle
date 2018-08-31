import {Plugin} from "webpack";
import {ObjectOption} from "../ObjectOption";

export class Plugins extends ObjectOption<Plugin[]> {
    protected readonly value: Plugin[] = [];

    public get key() {
        return "plugins";
    }

    public add(plugin: Plugin) {
        this.value.push(plugin);
    }

    public replace(plugin: Plugin) {
        const index = this.value
            .findIndex((p) => p instanceof plugin.constructor);

        this.value[index] = plugin;
    }
}
