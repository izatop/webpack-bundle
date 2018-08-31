import * as webpack from "webpack";
import {Plugins} from "../../../src/Configuration";

test("", () => {
    const plugins = new Plugins([]);
    plugins.add(new webpack.EnvironmentPlugin({}));
    expect(plugins).toMatchSnapshot();

    plugins.replace(new webpack.EnvironmentPlugin({foo: 1}));
    expect(plugins).toMatchSnapshot();
});
