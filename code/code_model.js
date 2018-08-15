//Condition model
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var CodeSchema   = new Schema({
    title: String,
	codeLeft : String,
    codeRight : String,
    codeLeftVotes: Number,
    codeRightVotes: Number,
    language : String,
    description : String,
    shortDescription: String
});

module.exports = mongoose.model('codes', CodeSchema);