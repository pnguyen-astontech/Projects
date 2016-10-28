
var Vehicle = require('./models/vehicle');

// expose the routes to our app with module.exports
module.exports = function (app) {

    // GET ALL
    app.get('/api/vehicle', function (req, res) {
        Vehicle.find(function (err, vehicle) {
            if (err)
                res.send(err);

            res.json(vehicle);
        });
    });

    // GET BY ID
    app.get('/api/vehicle/:vehicle_id', function (req, res) {
        Vehicle.findById(req.params.vehicle_id, function (err, vehicle) {
            if (err)
                res.send(err);

            res.json(vehicle);
        })

    });

    // SAVE
    app.post('/api/vehicle', function (req, res) {
        var vehicle = new Vehicle();

        hydrateVehicle(vehicle, req);
        console.log("test1");

        vehicle.save(function (err) {
            if (err)
                res.send(err);

            res.json(true);
        });
    });

    // UPDATE
    app.post('/api/vehicle/:vehicle_id', function (req, res) {
         console.log("test");

        Vehicle.findById(req.params.vehicle_id, function (err, vehicle) {
            if (err)
                res.send(err);

            if (vehicle != null) {

                hydrateVehicle(vehicle, req);

                vehicle.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json(vehicle)
                });
            } else {
                res.json({message : 'Vehicle not found'});
            }
        });
    });

    // DELETE
    app.delete('/api/vehicle/:vehicle_id', function (req, res) {
        Vehicle.findById(req.params.vehicle_id, function (err, vehicle) {
            if (vehicle != null) {
                if (err)
                    res.send(err);

                vehicle.remove(function (err) {
                    if (err)
                        res.send(err);
                });
            };

            Vehicle.find(function (err, vehicle) {
                if (err)
                    res.send(err);

                res.json(vehicle);
            });
        });
    });
};

function hydrateVehicle(vehicle, req) {
    vehicle.make = req.body.make;
    vehicle.model = req.body.model;
    vehicle.plate = req.body.plate;
    vehicle.vin = req.body.vin;
    vehicle.year = req.body.year;
    vehicle.color = req.body.color;
};