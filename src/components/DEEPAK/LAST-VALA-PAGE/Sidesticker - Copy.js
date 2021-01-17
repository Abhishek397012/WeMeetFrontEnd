import React, { Component } from "react";
import "../index.css";

class Sidesticker extends Component {
  render() {
    return (
      <>
        <div>
          <a href="#">
            <figure>
              <div className="date">
                <span className="card-date-day">9</span>
                <span className="card-date-month">JAN</span>
              </div>
              <figcaption>
                <h4>
                  <span>DEEPAK</span>
                </h4>
                <p>
                  <span>Small_talk</span>
                </p>
                <h2> START TIME</h2>
                <h2> 12:00 PM</h2>
              </figcaption>
            </figure>
          </a>
        </div>
      </>
    );
  }
}

export default Sidesticker;
