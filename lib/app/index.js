// Constructor
var App = module.exports = {};

/**
 * require
 * Requires files from application directory.
 *
 * @name require
 * @function
 * @param {String} file The absolute path to the file that is required (where the root is the application directory).
 * @return {Anything} The parsed content of the file.
 */
App.require = function (file) {
    return require(M.app.getPath() + file);
};

/**
 * descriptor
 * Returns the application descriptor.
 *
 * @name descriptor
 * @function
 * @return {Object} The application descriptor.
 */
App.descriptor = function () {
    return App.require("/application");
};
