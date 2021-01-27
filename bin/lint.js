(async function() {
  try {
    const exec = require("./Utils").exec;

    const argv = process.argv.slice(2);
    const command = "eslint --ignore-path .gitignore 'src/**/*'";
    
    // Start the linter
    console.log("[LINT] Starting lint command!");

    // If using "fix" args, run this condition first
    if (argv[0] == "fix") {
      console.log("[LINT FIX] Fixing your code using eslint...");
      await exec(`${command} --fix`);
      console.log("[LINT] Finished fixing your code!");
      return undefined;
    }

    // If no args, start from here
    console.log("[LINT] Linting your code, checking for error...")
    await exec(command); 
    // If there is no error when linting, print this message
    console.log("[LINT] No error has found on your code, good work!");
  } catch (error) { // Catch error from command
    // Message that get printed if there is an error when linting the code
    if (error.code == 1) {
      console.log("[LINT] Error has occurred on your code! The list of errors is above.");
      console.log("[LINT] To fix error, use `lint:fix` command.")
    } else {
      console.error(error);
    }
  }
})();
