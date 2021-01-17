import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./hostname.css";

class Hostname extends Component {
  render() {
    return (
      <>
        <div class="container out">
          <div class="row">
            <div class="col-12 col-sm-6 col-md-4 col-lg-3">
              <div class="our-team">
                <div class="picture">
                  <img
                    class="img-fluid"
                    src="https://picsum.photos/130/130?image=1027"
                  />
                </div>
                <div class="team-content">
                  <h3 class="xyz">Michele Miller</h3>
                  <h4 class="title">
                    <strong className="YX">HOST</strong>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hostname;
