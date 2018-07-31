import HtmlWebpackPlugin from "html-webpack-plugin";
import {default as path, dirname, join} from "path";
import webpack from "webpack";
import {Bundle, IWebpackValue, Options} from "webpack-bundle";
import {BundleOptimization, TypeScriptLoader} from "../";
import {FileLoader} from "../Loaders/FileLoader";

export interface IDevServerOptions {
    hot?: boolean;
    port?: number;
    compress?: boolean;
    historyApiFallback?: boolean;
}

export class ReactSPABundle extends Bundle {
    protected root: string;

    protected plugins: webpack.Plugin[] = [];

    constructor(context: NodeModule, mode: IWebpackValue<"mode"> = process.env.NODE_ENV as IWebpackValue<"mode">) {
        super(
            new Options.Mode(mode || "development"),
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
                new TypeScriptLoader({
                    transpileOnly: true,
                }),
                new FileLoader(),
            ]),
            new BundleOptimization(),
        );

        this.root = dirname(context.filename);
        this.plugins.push(new HtmlWebpackPlugin());
    }

    public setDevServer(options: IDevServerOptions = {}) {
        this.plugins.push(webpack.HotModuleReplacementPlugin);
        this.set(new Options.DevServer({
            contentBase: path.join(this.root, "dist"),
            historyApiFallback: options.historyApiFallback || true,
            compress: options.compress || true,
            port: options.port || 9000,
            hot: options.hot || false,
        }));
    }

    public getWebpackConfig() {
        this.set(new Options.Plugins(this.plugins));
        return super.getWebpackConfig();
    }
}
