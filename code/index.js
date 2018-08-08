const person_routes = require('./person_routes');

module.exports = function(app, db) {
    person_routes(app, db);
};