import {dirname} from "path";
import {IWebpackValue} from "../../IWebpack";
import {ScalarOption} from "../ScalarOption";

export class Context extends ScalarOption<"context"> {
    protected readonly value?: IWebpackValue<"context">;

    constructor(value?: NodeModule | IWebpackValue<"context">) {
        super(Context.getContextFrom(value));
    }

    protected static getContextFrom(value: IWebpackValue<"context"> | NodeModule): string | undefined {
        if (typeof value === "string" || typeof value === "undefined") {
            return value;
        }

        if (typeof value === "object" && "filename" in value) {
            return dirname(value.filename);
        }

        throw new Error("Unknown type of context option.");
    }
}
