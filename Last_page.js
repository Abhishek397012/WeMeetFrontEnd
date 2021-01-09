import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sticker_last_page.scss";
import "./index-last.css";

import Sidesticker from "./Sidesticker";
import Hostname from "./Hostname";

class Last_page extends Component {
  render() {
    return (
      <>
        <div class="container-fluid  special-margin">
          <div class="row">
            <div class="col-9">
              <div class="row">
                <div class="col">
                  <img
                    src="/images/Capture.PNG"
                    alt="mike-pic"
                    className="mike_pic"
                  />
                </div>
              </div>

              <div class="row whiteColor">
                <div class="col">
                  <h3 className="headingColor">ABOUT THIS EVENT</h3>
                  <br />
                  <h4>Small_talk</h4>
                  <hr />
                </div>
              </div>

              <div class="row whiteColor">
                <div class="col">
                  <h3 className="headingColor">SCHEDULE</h3>
                  <br />
                  <div className="schedule-card ">
                    <h4>Friday</h4>
                    <h4>Dec 25</h4>
                    <h4>2020</h4>
                  </div>
                  <br />
                  <br />
                  <h4>5:00 PM - 5:30 PM</h4>
                  <hr />
                </div>
              </div>
              <div class="row whiteColor">
                <div class="col">
                  <Hostname />
                </div>
              </div>
            </div>
            <div class="col-3">
              <Sidesticker />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Last_page;