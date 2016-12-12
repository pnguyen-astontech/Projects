var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./components/app.react');
var Home = require('./components/home.react');
var Db = require('./components/db/db-home.react');
var Admin = require('./components/admin/admin-home.react');
var Error404 = require('./components/errors/_404.react');


var routes = (
    <Route path="/" handler={App}>
        <DefaultRoute handler={Home} />
        <Route name="db" path="/db" handler={Db} />
        <Route name="admin" path="/admin" handler={Admin} />
        <NotFoundRoute handler={Error404} />
    </Route>
)

module.exports = routes;