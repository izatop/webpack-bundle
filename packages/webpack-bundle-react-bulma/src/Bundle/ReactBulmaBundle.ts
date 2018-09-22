import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {default as path, dirname, join} from "path";
import webpack from "webpack";
import {Bundle, IWebpackValue, Loaders, Options} from "webpack-bundle";
import {BundleOptimization} from "./Optimizations/BundleOptimization";

export class ReactBulmaBundle extends Bundle {
    constructor(context: NodeModule) {
        const mode = (process.env.NODE_ENV || "development") as IWebpackValue<"mode">;
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
                new Loaders.SassLoader({
                    test: /\.(css|sass|scss)/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {loader: "css-loader"},
                        {loader: "sass-loader"},
                    ],
                }),
                new Loaders.TypeScriptLoader({options: {transpileOnly: true}}),
                new Loaders.FileLoader({}),
                new Loaders.HtmlLoader({}),
            ]),
            new Options.ResolveLoader({
                modules: [
                    `${join(__dirname, "../../node_modules")}`,
                    `${join(__dirname, "../../../node_modules")}`,
                    `${join(__dirname, "../../../../node_modules")}`,
                    "node_modules",
                ],
            }),
            new BundleOptimization(),
        );

        const plugins = [
            new HtmlWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "assets/[name].css",
            }) as any,
            new webpack.HotModuleReplacementPlugin(),
        ];

        this.set(new Options.DevServer({
            contentBase: path.join(dirname(context.filename), "dist"),
            historyApiFallback: true,
            compress: true,
            port: 9000,
            hot: true,
        }));

        this.set(new Options.Plugins(plugins));
    }
}
