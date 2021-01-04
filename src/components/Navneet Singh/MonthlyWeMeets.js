import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import WeMeetsCard from "./WeMeetsDetails";
import moment from "moment";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";

const MonthlyWemeets = (props) => {
  const { user } = isAuthenticated();

  return (
    <Fragment>
      <div className="row">
        <div className="container">
          <h6 className="WeMeet_Month">{props.month}</h6>
          <div className="vl">
            <div className="row">
              {props.wemeets.map((event) => (
                <WeMeetsCard
                  createdon={moment(event.createdAt).fromNow().toUpperCase()}
                  status={
                    event.status == 0
                      ? "Upcoming"
                      : event.status == 1
                      ? "Live"
                      : event.status == 2
                      ? "Completed"
                      : ""
                  }
                  host={user.name}
                  title={event.title}
                  meetingtime={event.startDateTime}
                  id={event._id}
                  registrationcount={event.registrants.length}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MonthlyWemeets;
