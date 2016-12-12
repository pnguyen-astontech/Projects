var React = require('react');
var Router = require('react-router');

var routes = require('./routes');


// Render FluxCartApp Controller View
Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('app'));
})
