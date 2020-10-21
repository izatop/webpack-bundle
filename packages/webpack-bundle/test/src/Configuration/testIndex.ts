import {ObjectOption, Option} from "../../../src";
import * as options from "../../../src/Configuration";

test("Configuration Test", () => {
    type IBranch = new(...args: any[]) => Option<any> | ObjectOption<any>;

    const branches: IBranch[] = [
        options.AMD,
        options.Bail,
        options.Cache,
        options.Context,
        options.DevTool,
        options.Entry,
        options.Externals,
        options.Mode,
        options.Module,
        options.ModuleRule,
        options.Name,
        options.Node,
        options.Optimization,
        options.Output,
        options.Parallelism,
        options.Performance,
        options.Plugins,
        options.Profile,
        options.RecordsInputPath,
        options.RecordsOutputPath,
        options.RecordsPath,
        options.Resolve,
        options.ResolveLoader,
        options.Stats,
        options.Target,
        options.Watch,
        options.WatchOptions,
    ];

    for (const branch of branches) {
        expect(Option.isPrototypeOf(branch))
            .toBeTruthy();

        expect(new branch() instanceof Option)
            .toBeTruthy();

        const option = new branch();
        if (option instanceof ObjectOption) {
            expect(option.key)
                .toEqual(branch.prototype.constructor.name.replace(/^[A-Z]+/, (chunk: string) => chunk.toLowerCase()));
        }
    }
});
