import {ReactSPABundle} from "../src";

it("should bundle for development mode", () => {
    delete process.env.NODE_ENV;
    const config = new ReactSPABundle(module);
    expect(config).toMatchSnapshot();
});

it("should bundle for production mode", () => {
    process.env.NODE_ENV = "production";
    const config = new ReactSPABundle(module);
    expect(config).toMatchSnapshot();
});
