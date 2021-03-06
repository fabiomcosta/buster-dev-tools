var projects = [
    {name: "sinon", gitUrl: "https://github.com/cjohansen/Sinon.JS.git"},
    "buster-util",
    "buster-user-agent-parser",
    "buster-terminal",
    "buster-analyzer",
    "buster-syntax",
    "buster-core",
    "buster-assertions",
    "buster-format",
    "buster-evented-logger",
    "buster-test",
    "sinon-buster",
    "buster-glob",
    "buster-resources",
    "buster-capture-server",
    "buster-bayeux-emitter",
    "buster-configuration",
    "buster-client",
    "buster-args",
    "buster-stdio-logger",
    "buster-cli",
    "buster-test-cli",
    "buster-static",
    "buster",
    "buster-jstestdriver",
    "buster-html-doc"
];

try { projects = require("./local").concat(projects) } catch(e){};

module.exports = projects;
