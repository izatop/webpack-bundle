import {TypeScriptLoader} from "../../src/Loaders";

test("TypeScriptLoader Test", () => {
    const loader = new TypeScriptLoader({options: {transpileOnly: true}});
    expect(loader.serialize())
        .toEqual({
            loader: "ts",
            options: {
                transpileOnly: true,
            },
        });
});
