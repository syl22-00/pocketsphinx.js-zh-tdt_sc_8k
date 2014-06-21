
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
Module['FS_createDataFile']('/tdt_sc_8k', 'feat.params', [45, 110, 102, 105, 108, 116, 32, 50, 48, 10, 45, 108, 111, 119, 101, 114, 102, 32, 49, 10, 45, 117, 112, 112, 101, 114, 102, 32, 52, 48, 48, 48, 10, 45, 119, 108, 101, 110, 32, 48, 46, 48, 50, 53, 10, 45, 116, 114, 97, 110, 115, 102, 111, 114, 109, 32, 100, 99, 116, 10, 45, 114, 111, 117, 110, 100, 95, 102, 105, 108, 116, 101, 114, 115, 32, 110, 111, 10, 45, 114, 101, 109, 111, 118, 101, 95, 100, 99, 32, 121, 101, 115, 10, 45, 102, 101, 97, 116, 32, 49, 115, 95, 99, 95, 100, 95, 100, 100, 10, 45, 115, 118, 115, 112, 101, 99, 32, 48, 45, 49, 50, 47, 49, 51, 45, 50, 53, 47, 50, 54, 45, 51, 56, 10, 45, 97, 103, 99, 32, 110, 111, 110, 101, 10, 45, 99, 109, 110, 32, 99, 117, 114, 114, 101, 110, 116, 10, 45, 99, 109, 110, 105, 110, 105, 116, 32, 53, 52, 44, 45, 49, 44, 50, 10, 45, 118, 97, 114, 110, 111, 114, 109, 32, 110, 111, 10], true, true);

  }
  if (Module['calledRun']) {
    runWithFS();
  } else {
    if (!Module['preRun']) Module['preRun'] = [];
    Module["preRun"].push(runWithFS); // FS is not initialized yet, wait for it
  }

})();
