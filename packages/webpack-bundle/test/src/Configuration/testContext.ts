import {dirname} from "path";
import {Context} from "../../../src/Configuration";

test("Context Test", () => {
    expect(new Context(module).getValue())
        .toEqual(dirname(module.filename));

    expect(new Context("/path/to/context").getValue())
        .toEqual("/path/to/context");

    expect(() => new Context({} as any))
        .toThrowError();
});
