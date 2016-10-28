// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    make : String,
    model : String,
    plate : String,
    vin : String,
    year : String,
    color : String
});

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Vehicle', vehicleSchema);