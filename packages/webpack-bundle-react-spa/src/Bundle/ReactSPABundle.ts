import HtmlWebpackPlugin from "html-webpack-plugin";
import {default as path, dirname, join} from "path";
import webpack from "webpack";
import {Bundle, IWebpackValue, Loaders, Options} from "webpack-bundle";
import {BundleOptimization} from "./Optimizations/BundleOptimization";

const DEFAULT_MODE = (process.env.NODE_ENV || "development") as IWebpackValue<"mode">;

export class ReactSPABundle extends Bundle {
    constructor(context: NodeModule, mode: IWebpackValue<"mode"> = DEFAULT_MODE) {
        super(
            new Options.Mode(mode),
            new Options.Context(join(dirname(context.filename), "src")),
            new Options.Entry("entry"),
            new Options.Resolve({
                extensions: [".ts", ".tsx", ".js", ".jsx"],
                modules: ["node_modules", join(dirname(context.filename), "src")],
            }),
            new Options.Output({
                path: join(dirname(context.filename), "dist"),
                publicPath: "/",
                filename: "[hash:6]/[name].js",
                chunkFilename: "[hash:6]/chunks/[name].js",
            }),
            new Options.Module([
                new Loaders.TypeScriptLoader({
                    options: {
                        transpileOnly: !(mode === "production"),
                    },
                }),
                new Loaders.FileLoader({}),
            ]),
            new Options.ResolveLoader({
                modules: [
                    `${join(__dirname, "../../node_modules")}`,
                    "node_modules",
                ],
            }),
            new BundleOptimization(),
        );

        const plugins = [new HtmlWebpackPlugin()];
        if (mode !== "production") {
            plugins.push(webpack.HotModuleReplacementPlugin);
            this.set(new Options.DevServer({
                contentBase: path.join(dirname(context.filename), "dist"),
                historyApiFallback: true,
                compress: true,
                port: 9000,
                hot: true,
            }));
        }

        this.set(new Options.Plugins(plugins));
    }
}
