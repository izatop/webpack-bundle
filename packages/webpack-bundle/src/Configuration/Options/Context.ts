import {dirname} from "path";
import {IWebpackValue} from "../../IWebpack";
import {ScalarOption} from "../ScalarOption";

export class Context extends ScalarOption<"context"> {
    protected readonly value?: IWebpackValue<"context">;

    constructor(value?: NodeModule | IWebpackValue<"context">) {
        super();
        this.value = this.getContextFrom(value);
    }

    protected getContextFrom(value: IWebpackValue<"context"> | NodeJS.Module) {
        if (!value || typeof value === "string") {
            return value;
        }

        if (typeof value === "object" && "filename" in value) {
            return dirname(value.filename);
        }

        throw new Error("Unknown type of context option.");
    }
}
