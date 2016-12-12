var React = require('react');
var Navbar = require('./includes/navbar.react');
var Footer = require('./includes/footer.react');

// Define main Controller View
var Home = React.createClass({

    // Render our child components, passing state via props
    render: function () {
        return (
            <div className="fixed-bg bg-img-1">
                <Navbar />
                <div className="pad-top">
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Home</h2>
                            <span>Web application to mangage Force of Will trading card game</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Home</h2>
                            <span>Web application to mangage Force of Will trading card game</span>
                        </div>
                    </div>
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Home</h2>
                            <span>Web application to mangage Force of Will trading card game</span>
                        </div>
                    </div>
                    <p className="home-page-break" />
                    <div className="container">
                        <div className="jumbotron">
                            <h2>Home</h2>
                            <span>Web application to mangage Force of Will trading card game</span>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    },
});

module.exports = Home;