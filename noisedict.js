
var Module;
if (typeof Module === 'undefined') Module = eval('(function() { try { return Module || {} } catch(e) { return {} } })()');
if (!Module.expectedDataFileDownloads) {
  Module.expectedDataFileDownloads = 0;
  Module.finishedDataFileDownloads = 0;
}
Module.expectedDataFileDownloads++;
(function() {

  function runWithFS() {

function assert(check, msg) {
  if (!check) throw msg + new Error().stack;
}
Module['FS_createPath']('/', 'tdt_sc_8k', true, true);
Module['FS_createDataFile']('/tdt_sc_8k', 'noisedict', [60, 115, 62, 32, 32, 32, 9, 9, 83, 73, 76, 10, 60, 47, 115, 62, 32, 32, 9, 9, 83, 73, 76, 10, 60, 115, 105, 108, 62, 9, 9, 83, 73, 76, 10, 43, 43, 108, 97, 117, 103, 104, 43, 43, 9, 43, 76, 65, 85, 71, 72, 43, 10, 43, 43, 108, 105, 112, 115, 109, 97, 99, 107, 43, 43, 9, 43, 76, 73, 80, 83, 77, 65, 67, 75, 43, 10, 43, 43, 99, 111, 117, 103, 104, 43, 43, 9, 43, 67, 79, 85, 71, 72, 43, 10, 43, 43, 98, 114, 101, 97, 116, 104, 43, 43, 9, 43, 66, 82, 69, 65, 84, 72, 69, 43, 10], true, true);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
