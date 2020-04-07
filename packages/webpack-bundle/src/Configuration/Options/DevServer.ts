import * as webpackDevServer from "webpack-dev-server";
import {ObjectOption} from "../ObjectOption";

export class DevServer extends ObjectOption<webpackDevServer.Configuration> {
    public get key() {
        return "devServer";
    }
}
