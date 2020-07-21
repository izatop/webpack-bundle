import {ScalarOption} from "../ScalarOption";

export class DevTool extends ScalarOption<"devtool"> {
    public get key() {
        return "devtool";
    }
}
