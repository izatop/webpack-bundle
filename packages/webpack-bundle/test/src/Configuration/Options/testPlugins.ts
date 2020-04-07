import * as webpack from "webpack";
import {Plugins} from "../../../../src/Configuration";

test("", () => {
    const plugins = new Plugins([]);
    const p1 = new webpack.EnvironmentPlugin({});
    const p2 = new webpack.EnvironmentPlugin({foo: 1});
    const p3 = new webpack.IgnorePlugin(/.txt/);

    plugins.add(p1);
    expect(plugins.get()).toEqual([p1]);

    plugins.replace(p2);
    plugins.replace(p3);
    expect(plugins.get()).toEqual([p2, p3]);
});
