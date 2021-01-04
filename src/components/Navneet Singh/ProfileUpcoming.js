import WeMeetsCard from "./WeMeetsDetails";
import "./styles.css";
import React, { useEffect, useState, Fragment } from "react";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";
import { getUpcoming, getPast } from "./apiDash";
import moment from "moment";

const ProfileUpcoming = () => {
  const [upcoming, setUpcoming] = useState([]);

  const { user } = isAuthenticated();

  const getUpcomingWemeets = () => {
    getUpcoming(user._id)
      .then((data) => {
        setUpcoming(data);
        console.log("Upcoming Wemeets: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUpcomingWemeets();
  }, []);

  return (
    <Fragment>
      {upcoming.length && (
        <div className="profile_upcoming">
          <div className="profile_header">Upcoming Events</div>
          <div className="upcoming_profile_content">
            {upcoming.map((event) => (
              <WeMeetsCard
                createdon={moment(event.createdAt).fromNow().toUpperCase()}
                status="Upcoming"
                host={user.name}
                title={event.title}
                meetingtime="12:00 PM - 1:00 PM IST"
                id={event._id}
                registrationcount={event.registrants.length}
              />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProfileUpcoming;
