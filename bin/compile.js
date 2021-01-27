(async function() {
  try {
    const exec = require("./Utils").exec;

    // Start the compiler
    console.log("[COMPILE] Starting compile command!");

    // Removing old dist folder
    console.log("[CLEANUP] Removing old dist folder...");
    await exec("rm -rf ./dist");
    console.log("[CLEANUP] Finished removing the old dist folder.");
  
    // Compiling the project
    console.log("[COMPILE] Compile the project using the TSC compiler...");
    let startTime = new Date(); // Start the timer
    await exec("tsc");
    let endTime = new Date(); // End the timer
    console.log(`[COMPILE] Finished compiling the project, time to compile: ${msToTime(startTime, endTime)}.`);
  } catch (error) { // Catch if there is an error from command
    console.error(error);
  }
})();

/**
 * Convert ms to readable timer
 *
 * @param {number} start The start time
 * @param {number} end The end time
 * @return {string} Readable timer hh:mm:ss.ms
 */
function msToTime(start, end) {
  let diff = end.getTime() - start.getTime();
  let pad  = (n) => (n < 10) ? `0${n}` : n;
  //            hours               minutes                    seconds               ms
  return `${pad(diff/3.6e6|0)}:${pad((diff%3.6e6)/6e4|0)}:${pad((diff%6e4)/1e3|0)}.${diff%1e3}`;
}

