import {Loader} from "webpack-bundle";

export const FILE_LOADER_EXTENSION_TEST = /\.(woff(2)?|ttf|eot|svg|jpg|jpeg|png|gif)(\?v=\d+\.\d+\.\d+)?$/;

export class FileLoader extends Loader {
    constructor(test = FILE_LOADER_EXTENSION_TEST) {
        super({
            test,
            loader: "file",
            options: {
                name: "[hash].[ext]",
                outputPath: "assets/",
            },
        });
    }
}
