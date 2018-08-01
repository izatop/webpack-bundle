import {AntdBundle} from "../src";

it("ReactSPABundle should generate valid configuration", () => {
    const moduleMock: NodeModule = {
        ...module,
        filename: "/app/webpack.config.js",
    };

    const config1 = new AntdBundle(moduleMock)
        .getWebpackConfig();

    expect(config1.mode)
        .toEqual(process.env.NODE_ENV || "development");
    expect(config1)
        .toMatchSnapshot();

    const config2 = new AntdBundle(moduleMock, "production")
        .getWebpackConfig();

    expect(config2.mode)
        .toEqual("production");
    expect(config2)
        .toMatchSnapshot();
});
