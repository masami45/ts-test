(async function() {
  try {
    const exec = require("./Utils").exec;

    // Start build the project
    console.log("[BUILD] Start building your project...");
    console.log("[BUILD] Linting your project first before compiling it...");
    // Execute linter
    await exec("node ./bin/lint", { echo: true });
    // Execute compiler
    await exec("node ./bin/compile", { echo: true });
    // Print the message if no error has occurred
    console.log("[BUILD] Finisih building your project, use `start` to run your project.");
  } catch(error) {
    console.error(error);
  }
})();
