import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {default as path, dirname, join} from "path";
import webpack from "webpack";
import {Bundle, IWebpackValue, Loaders, Options} from "webpack-bundle";
import {TypeScriptCustomLoader} from "./Loaders/TypeScriptCustomLoader";
import {BundleOptimization} from "./Optimizations/BundleOptimization";

const DEFAULT_MODE = (process.env.NODE_ENV || "development") as IWebpackValue<"mode">;

export class AntdBundle extends Bundle {
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
                filename: "[name].js?[hash:6]",
                chunkFilename: "chunks/[name].js?[hash:6]",
            }),
            new Options.Module([
                new TypeScriptCustomLoader(mode),
                new Loaders.FileLoader({}),
                new Loaders.Loader({
                    test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader"},
                        {
                            loader: "less-loader",
                            options: {
                                javascriptEnabled: true,
                            },
                        },
                    ],
                }),
                new Loaders.Loader({
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader"},
                    ],
                }),
            ]),
            new Options.ResolveLoader({
                modules: [
                    `${join(__dirname, "../../node_modules")}`,
                    "node_modules",
                ],
            }),
            new BundleOptimization(),
        );

        const plugins = [
            new MiniCssExtractPlugin({
                filename: "assets/[name].css",
            }),
            new HtmlWebpackPlugin(),
        ];

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
