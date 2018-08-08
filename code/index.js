const code_routes = require('./code_routes');

module.exports = function(app, db) {
    code_routes(app, db);
};