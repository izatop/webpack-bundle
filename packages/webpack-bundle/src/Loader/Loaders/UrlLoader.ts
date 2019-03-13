import {Loader} from "../Loader";

export class FileLoader extends Loader {
    protected getDefaults() {
        return {
            test: /\.(woff(2)?|ttf|eot|svg|jpg|jpeg|png|gif)(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url-loader",
            options: {
                name: "[hash].[ext]",
                outputPath: "assets/",
            },
        };
    }
}
