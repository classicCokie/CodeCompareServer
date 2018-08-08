//Condition model
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PersonSchema   = new Schema({
    id : Number,
   	name : String,
    description: String,
    street : String,
    city : String,
    profile_image : String
});

module.exports = mongoose.model('persons', PersonSchema);