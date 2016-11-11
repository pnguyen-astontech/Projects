var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var releaseSchema = new Schema({
    release: String
});

module.exports = mongoose.model('Release', releaseSchema);