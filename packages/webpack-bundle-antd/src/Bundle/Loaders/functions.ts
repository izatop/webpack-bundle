import tsImportPluginFactory from "ts-import-plugin";

export function getCustomTransformers() {
    return {
        before: [
            tsImportPluginFactory({
                libraryDirectory: "es",
                libraryName: "antd",
                style: "css",
            }),
        ],
    };
}
