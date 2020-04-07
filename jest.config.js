module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    "testRegex": "/test[^/]*\\.tsx?$",
    roots: ["<rootDir>/packages/webpack-bundle/test"],
};
