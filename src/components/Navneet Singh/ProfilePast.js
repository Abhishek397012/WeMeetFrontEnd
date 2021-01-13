import WeMeetsCard from "./WeMeetsDetails";
import "./styles.css";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";
import { getPast } from "./apiDash";
import React, { useEffect, useState, Fragment } from "react";
import moment from "moment";

const ProfilePast = () => {
  const [past, setPast] = useState([]);

  const { user } = isAuthenticated();
  const GetPastWeMeets = () => {
    getPast(user._id)
      .then((data) => {
        setPast(data);
        console.log("Past WeMeets: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    GetPastWeMeets();
  }, []);

  return (
    <Fragment>
      {past.length && (
        <div className="profile_upcoming">
          <div className="profile_header">Past Events</div>
          <div className="upcoming_profile_content">
            {past.map((event) => (
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
              />
            ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default ProfilePast;
