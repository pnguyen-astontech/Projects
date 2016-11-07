// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cardSchema = new Schema({
    name : String,
    type : String,
    picture : String,
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Card', cardSchema);