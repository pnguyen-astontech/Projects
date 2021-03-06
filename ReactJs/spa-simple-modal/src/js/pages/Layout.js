import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;

    console.log("layout");
    return (
      <div>
        <Nav location={location} />
        <div class="container padding-top-50">
          <div class="row">
            <div class="col-lg-12">
              <h1>pnguyen.net</h1>

              <div class="col-lg-12">
                {this.props.children}
              </div>

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}