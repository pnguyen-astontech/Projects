var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var attributeSchema = new Schema({
    attribute: String
});

module.exports = mongoose.model('Attribute', attributeSchema);
