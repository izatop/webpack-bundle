import {AntdBundle} from "../src";

it("ReactSPABundle should generate valid configuration", () => {
    const config1 = new AntdBundle(module)
        .getWebpackConfig();

    expect(config1.mode)
        .toEqual(process.env.NODE_ENV || "development");
    expect(config1)
        .toMatchSnapshot();

    const config2 = new AntdBundle(module, "production")
        .getWebpackConfig();

    expect(config2.mode)
        .toEqual("production");
    expect(config2)
        .toMatchSnapshot();
});
