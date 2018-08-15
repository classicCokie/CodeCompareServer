//Condition model
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var VoteIpSchema   = new Schema({
    ip: String,
    voteObjects: [String]
});

module.exports = mongoose.model('voteIp', VoteIpSchema);