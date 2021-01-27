const path = require("path");

(async function() {
  try {
    const exec = require("./Utils").exec;
    const dirPath = path.dirname(__dirname);
    const dirName = dirPath.substring(dirPath.lastIndexOf("/") + 1);

    // Start the compiler
    console.log("[COMPILE] Starting compile command!");

    // Compiling the project
    console.log("[COMPILE] Compile the project using the SWC compiler...");
    let startTime = new Date(); // Start the timer
    await exec(`swc src -d /tmp/${dirName}`);
    let endTime = new Date(); // End the timer
    console.log(`[COMPILE] Finished compiling the project, time to compile: ${msToTime(startTime, endTime)}.\n`);

    await exec(`node /tmp/${dirName}/index.js`);

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

