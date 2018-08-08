//Condition model
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CodeSchema   = new Schema({
	codeLeft : String,
    codeRight : String,
    codeLeftVotes: Number,
    codeRightVotes: Number,
    language : String,
    description : String
});

module.exports = mongoose.model('codes', CodeSchema);