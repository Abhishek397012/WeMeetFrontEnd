import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { Link } from 'react-router-dom';
import Default from "./images/default.jpg"
class WeMeetsCard extends Component {
  static defaultProps = {
    registrationcount: 0,
  };
  render() {
    return (
      <div className="col-sm-10 col-md-10 col-lg-5 AllMonthlyWeMeets">
        <div className="row">
          <div className="col-sm-10 col-md-4 col-lg-4">
            <img className="img" src={Default} alt="default image" />
          </div>
          <div className="col-sm-10 col-md-8 col-lg-8">
            <div className="row WeMeetHeaderCard">
              <h4 className="AllMonthlyWeMeetsContent WeMeetHeaderCardCreateDate">
                {this.props.createdon}
              </h4>
              <h4 className="AllMonthlyWeMeetsContent WeMeetHeaderCardStatus">
                {this.props.status}
              </h4>
            </div>
            <h4 className="AllMonthlyWeMeetsContent">
              Host:
              <span className="AllMonthlyWeMeetsHeading">
                {this.props.host}
              </span>
            </h4>
            <h4 className="AllMonthlyWeMeetsContent AllMonthlyWeMeetsHeading">
              {this.props.title}
            </h4>
            <h5 className="AllMonthlyWeMeetsContent AllMonthlyWeMeetsTime">
              {this.props.meetingtime}
            </h5>
          </div>
        </div>
        <div className="row WeMeetBottomCard ">
          <h6>{this.props.registrationcount} Registrations</h6>
          <Link to={`/wemeets/${this.props.id}/summary`}>
            <button className="btn btn-dark btndisplay">View Details</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default WeMeetsCard;
