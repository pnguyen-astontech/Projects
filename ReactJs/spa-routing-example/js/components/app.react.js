var React = require('react');
var RouteHandler = require('react-router').RouteHandler;


// Define main Controller View
var App = React.createClass({

    // Render our child components, passing state via props
    render: function () {
        return (
            <RouteHandler />
        );
    },

});

module.exports = App;
