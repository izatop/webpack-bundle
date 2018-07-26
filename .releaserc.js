const hooks = require("semantic-release-monorepo-hooks");
const output = hooks();

const publish = output.isLastRun
    ? [
        "@semantic-release/github",
        "@semantic-release/npm",
    ]
    : [
        "@semantic-release/npm",
    ];

module.exports = {
    branch: "master",
    tagFormat: "v${version}",
    prepare: [
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
    ],
    publish: publish,
    verifyConditions: ["@semantic-release/npm", "@semantic-release/github"],
    /* verifyRelease: ['@semantic-release/npm', '@semantic-release/github']
      .map(require)
      .map(x => x.verifyConditions), */
};
