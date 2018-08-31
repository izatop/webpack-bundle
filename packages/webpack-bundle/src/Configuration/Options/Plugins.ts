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
        this.value.filter((p) => p instanceof plugin.constructor);
    }
}
