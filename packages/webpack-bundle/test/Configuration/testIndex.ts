import * as options from "../../src/Configuration";
import {Option} from "../../src/Configuration/Option";

test("Configuration Test", () => {
    const branches = [
        "AMD",
        "Bail",
        "Cache",
        "Context",
        "Debug",
        "DevTool",
        "Entry",
        "Externals",
        "Mode",
        "Module",
        "ModuleRule",
        "Name",
        "Node",
        "Optimization",
        "Output",
        "Parallelism",
        "Performance",
        "Plugins",
        "Profile",
        "RecordsInputPath",
        "RecordsOutputPath",
        "RecordsPath",
        "Resolve",
        "ResolveLoader",
        "Stats",
        "Target",
        "Watch",
        "WatchOptions",
    ];

    expect(Object.keys(options)).toMatchObject(branches);

    const index: any = options;
    for (const branch of branches) {
        const cls: {new (): Option} = index[branch];
        expect(Option.isPrototypeOf(index[branch]))
            .toBeTruthy();

        expect(new cls() instanceof Option)
            .toBeTruthy();
    }
});
