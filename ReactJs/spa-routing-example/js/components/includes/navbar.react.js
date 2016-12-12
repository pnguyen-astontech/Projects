var React = require('react');
var Link = require('react-router').Link;
// var ReactBootstrap = require('react-bootstrap');

// var Navbar = ReactBootstrap.Navbar;
// var Nav = ReactBootstrap.Nav;
// var NavItem = ReactBootstrap.NavItem;

// Define main Controller View
var Navbar = React.createClass({

    // Render our child components, passing state via props
    render: function () {
        return (
            <div className="container">
                <nav className="navbar navbar-fixed-top navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="/" className="navbar-brand">Home</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/db">DB</Link></li>
                                <li><Link to="/admin">Admin</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/signup"><i className="fa fa-user-o" aria-hidden="true"></i> Sign up</Link></li>
                                <li><Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    },

});



module.exports = Navbar;