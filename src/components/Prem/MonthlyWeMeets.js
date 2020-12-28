import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import WeMeetsCard from "./WeMeetsDetails";
class MonthlyWemeets extends Component {
  static propTypes = {
    month: PropTypes.string.isRequired,
  };
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="container">
            <h6 className="WeMeet_Month">{this.props.month}</h6>
            <div className="vl">
              <div className="row">
                <WeMeetsCard
                  createdon="Sat 20 Dec 2020"
                  status="Upcoming"
                  host="191210037 Community"
                  title="Backend Discussion"
                  meetingtime="12:00 PM - 1:00 PM IST"
                />
                <WeMeetsCard
                  createdon="Sat 20 Dec 2020"
                  status="Upcoming"
                  host="191210037 Community"
                  title="Dashboard Creation"
                  meetingtime="12:00 PM - 1:00 PM IST"
                />
                <WeMeetsCard
                  createdon="Sat 19 Dec 2020"
                  status="Completed"
                  host="191210037 Community"
                  title="We Meet Discussion"
                  meetingtime="12:00 PM - 1:00 PM IST"
                />
                <WeMeetsCard
                  createdon="Sat 19 Dec 2020"
                  status="Completed"
                  host="191210037 Community"
                  title="We Meet Introduction"
                  meetingtime="12:00 PM - 1:00 PM IST"
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default MonthlyWemeets;
