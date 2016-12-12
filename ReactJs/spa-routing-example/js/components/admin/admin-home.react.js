var React = require('react');
var Navbar = require('../includes/navbar.react')
var Footer = require('../includes/footer.react')

// Define main Controller View
var Admin = React.createClass({

    // Render our child components, passing state via props
    render: function () {
        return (
            <div className="fixed-bg bg-img-3">
                <Navbar />
                <div className="pad-top">
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Admin Home</h2>
                            <span>Things to do here</span>
                        </div>
                    </div>
                    <p className="home-page-break" />
                    <p className="home-page-break" />
                    <p className="home-page-break" />
                    <p className="home-page-break" />
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Admin Home</h2>
                            <span>Things to do here</span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    },
});

module.exports = Admin;