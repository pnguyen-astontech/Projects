var React = require('react');

var Footer = React.createClass({

    render: function () {
        return (
            <footer>
                <div className="footer lb-sm">
                    <ul className="footer-float-left">
                        <li>SALES</li>
                        <li><a href="/support">Contact Us</a></li>
                        <li><a href="/shipping-returns">Shipping Policy</a></li>
                        <li><a href="/resellers">Authorized Resellers</a></li>
                    </ul>
                    <ul className="footer-float-left">
                        <li>LINKS</li>
                        <li><a href="https://github.com/pnguyen-astontech/Projects/tree/master/Mean/FOW" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                        <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li> </li>
                    </ul>
                    <div className="float-right">
                        &copy;Copyright 2016 pnguyen@fap.com
                    </div>
                </div>
            </footer>
        );
    },
});

module.exports = Footer;