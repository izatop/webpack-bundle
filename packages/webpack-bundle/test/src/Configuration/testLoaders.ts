import * as Loaders from "../../../src/Loader";

type ILoaderConstructor = new(...args: any[]) => Loaders.Loader;

const loaders: ILoaderConstructor[] = [
    Loaders.TypeScriptLoader,
    Loaders.FileLoader,
    Loaders.CssLoader,
    Loaders.LessLoader,
    Loaders.SassLoader,
    Loaders.StyleLoader,
    Loaders.HtmlLoader,
];

test("Loaders test", () => {
    for (const Loader of loaders) {
        const Stub = class extends Loader {
            public getDefaults() {
                return super.getDefaults();
            }
        };

        const loader = new Loader();
        expect(loader.getValue())
            .toEqual(new Stub().getDefaults());
    }
});
