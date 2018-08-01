import {AntdBundle} from "../src";

it("should bundle for development mode", () => {
    delete process.env.NODE_ENV;
    const config = new AntdBundle(module);
    expect(config).toMatchSnapshot();
});

it("should bundle for production mode", () => {
    process.env.NODE_ENV = "production";
    const config = new AntdBundle(module);
    expect(config).toMatchSnapshot();
});
