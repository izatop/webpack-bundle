import {getCustomTransformers} from "../../src/Bundle/Loaders/functions";
import {TypeScriptCustomLoader} from "../../src/Bundle/Loaders/TypeScriptCustomLoader";

it("Match TypeScriptCustomLoader options", () => {
    const loader = new TypeScriptCustomLoader("development");
    expect(loader.getValue()!.options)
        .toMatchObject({getCustomTransformers});

    expect(getCustomTransformers())
        .toMatchSnapshot();
});
