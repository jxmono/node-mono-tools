// Dependencies
var App = require("../app");

// Constructor
var Module = module.exports = {};

/**
 * get
 * Returns module instance object with additional fields.
 *
 * @name get
 * @function
 * @param {String} miid The module instance name.
 * @return {Object} An object containing the following fields:
 *
 *  - `_miid` (Object): The raw module instance object.
 *  - `source` (String): Module source.
 *  - `owner` (String): Module owner.
 *  - `name` (String): Module name.
 *  - `version` (String): Module version.
 */
Module.get = function (miid) {
    var appDes = App.descriptor();
    appDes.miids = Object(appDes.miids);
    var mod = appDes.miids[miid];
    if (!mod) { return null; }
    var sonv = mod.module.split(/\//);
    var mObj = {
        _miid: mod,
        source: sonv[0],
        owner: sonv[1],
        name: sonv[2],
        version: sonv[3]
    };

    return mObj;
};

/**
 * path
 * Gets the path to the module directory.
 *
 * @name path
 * @function
 * @param {String} miid The module instance name.
 * @return {String} The absolute path to the module directory.
 */
Module.path = function (miid) {
    var mod = Module.get(miid);
    if (!mod) { return null; }

    if (mod.version === "dev") {
        mod.version = "dev_" + M.config.app.id;
    }

    return M.app.getPath() + "/mono_modules/" + mod.source + "/" + mod.owner + "/" + mod.name + "/" + mod.version;
};

/**
 * require
 * Requires files from application directory.
 *
 * @name require
 * @function
 * @param {String} miid The module instance name.
 * @param {String} file The absolute path to the file that is required (where the root is the module directory).
 * @return {Anything} The parsed content of the file.
 */
Module.require = function (miid, file) {
    return require(Module.path(miid) + file);
};
