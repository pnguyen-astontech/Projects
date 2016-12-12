var React = require('react');
var Navbar = require('../includes/navbar.react')
var Footer = require('../includes/footer.react')

// Define main Controller View
var Error404 = React.createClass({

    // Render our child components, passing state via props
    render: function () {
        return (
            <div>
                <Navbar />
                <div className="pad-top">
                    <div className="container">
                        <div className="jumbotron">
                            <h2>404 Page Not Found</h2>
                            <span>error message goes here</span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    },
});

module.exports = Error404;