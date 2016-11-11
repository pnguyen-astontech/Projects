
var Card = require('./models/card');
var Attribute = require('./models/attribute');
var Release = require('./models/release');

var path = require('path');
// var String = require('string');

module.exports = function (app) {

    // GET ALL ATTRIBUTES
    app.get('/api/attributes', function (req, res) {
        Attribute.find(function (err, card) {
            if (err)
                res.send(err);

            res.json(card);
        });
    });

    // GET ALL RELEASES
    app.get('/api/releases', function (req, res) {
        Release.find(function (err, card) {
            if (err)
                res.send(err);

            res.json(card);
        });
    });

    // GET ALL CARDS
    app.get('/api/cards', function (req, res) {
        Card.find(function (err, card) {
            if (err)
                res.send(err);

            res.json(card.filter(function (n) {
                var search = '';
                if (req.query.q != undefined)
                    search = req.query.q.toLowerCase();
                return String(n.name).toLowerCase().includes(search);
            }));
        });
    });

    // GET BY ID
    app.get('/api/cards/:card_id', function (req, res) {
        Card.findById(req.params.card_id, function (err, card) {
            if (err)
                res.send(err);

            res.json(card);
        })
    });

    // SAVE
    app.post('/api/cards', function (req, res) {
        var card = new Card();

        hydrateCard(card, req);

        card.save(function (err) {
            if (err)
                res.send(err);

            res.json(true);
        });
    });

    // UPDATE
    app.put('/api/cards/:card_id', function (req, res) {

        Card.findById(req.params.card_id, function (err, card) {
            if (err)
                res.send(err);

            if (card != null) {

                hydrateCard(card, req);

                card.save(function (err) {
                    if (err)
                        res.send(err);

                    res.json(card)
                });
            } else {
                res.json({ message: 'Card not found' });
            }
        });
    });

    // DELETE
    app.delete('/api/cards/:card_id', function (req, res) {
        Card.findById(req.params.card_id, function (err, card) {
            if (card != null) {
                if (err)
                    res.send(err);

                card.remove(function (err) {
                    if (err)
                        res.send(err);
                });
            };

            Card.find(function (err, card) {
                if (err)
                    res.send(err);

                res.json(card);
            });
        });
    });

    app.get('/cards*', function (req, res) {
        res.sendFile(path.join(__dirname + '/..', '/public/index.html'));
    });

    // app.get('/cards/list', function(req, res) {
    //     res.sendFile(path.join(__dirname + '/..', '/public/index.html'));
    // });

    // app.get('/cards/search', function(req, res) {
    //     res.sendFile(path.join(__dirname + '/..', '/public/index.html'));
    // });

    app.get('/admin*', function (req, res) {
        res.sendFile(path.join(__dirname + '/..', '/public/index.html'));
    });
};

function hydrateCard(card, req) {
    card.name = req.body.name;
    card.type = req.body.type;
    card.picture = req.body.picture;
};