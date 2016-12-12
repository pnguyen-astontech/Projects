var React = require('react');
var Navbar = require('../includes/navbar.react')
var Footer = require('../includes/footer.react')

// Define main Controller View
var Db = React.createClass({

    // Render our child components, passing state via props
    render: function () {
        return (
            <div className="fixed-bg bg-img-2">
                <Navbar />
                <div className="pad-top">
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Db Home</h2>
                            <span>Databeses goes here</span>
                        </div>
                    </div>
                    <p className="home-page-break" />
                    <p className="home-page-break" />
                    <p className="home-page-break" />
                    <p className="home-page-break" />
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Db Home</h2>
                            <span>Databeses goes here</span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    },
});

module.exports = Db;