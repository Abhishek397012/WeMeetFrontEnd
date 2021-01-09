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
                status={
                  event.status === 0
                    ? "Upcoming"
                    : event.status === 1
                    ? "Live"
                    : event.status === 2
                    ? "Completed"
                    : ""
                }
                meetingstarttimehours={new Date(
                  new Date(event.startDateTime).toISOString()
                ).getHours()}
                meetingstarttimemins={
                  new Date(new Date(event.startDateTime).toISOString())
                    .getMinutes()
                    .toString().length === 1
                    ? "0" +
                      new Date(
                        new Date(event.startDateTime).toISOString()
                      ).getMinutes()
                    : new Date(
                        new Date(event.startDateTime).toISOString()
                      ).getMinutes()
                }
                meetingendtimehours={new Date(
                  new Date(event.endDateTime).toISOString()
                ).getHours()}
                meetingendtimemins={
                  new Date(new Date(event.endDateTime).toISOString())
                    .getMinutes()
                    .toString().length === 1
                    ? "0" +
                      new Date(
                        new Date(event.endDateTime).toISOString()
                      ).getMinutes()
                    : new Date(
                        new Date(event.endDateTime).toISOString()
                      ).getMinutes()
                }
                host={user.name}
                title={event.title}
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
