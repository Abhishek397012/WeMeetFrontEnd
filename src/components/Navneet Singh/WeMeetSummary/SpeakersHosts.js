import React, { useState, useEffect } from "react";
import SummarySidebar from "./SummarySidebar.js";
import "./styles.css";
import SpeakerCard from "./SpeakersCard";
import { getAllSpeakers } from "./apiDash";
import { isAuthenticated } from "../../Hardik/LogIn/apiLogin";

const SpeakersHosts = (props) => {
  const { user } = isAuthenticated();
  var [isallowed, setIsAllowed] = useState(true);
  const [AllSpeakers, setAllSpeakers] = useState({});
  const [error, SetError] = useState(false);
  const [found, setFound] = useState(false);
  const loadAllSpeakers = () => {
    // Get the information from the database
    getAllSpeakers(user._id, props.match.params.wemeetId)
      .then((data) => {
        console.log(data);
        if (data.allowed == 1) setAllSpeakers(data.speakers);
        else {
          console.log("false from backend");
          isallowed = false;
          console.log(isallowed);
          setIsAllowed(false);
        }
        if (AllSpeakers) {
          setFound(true);
        } else {
          setFound(false);
        }
      })
      .catch((err) => {
        SetError(err);
        console.log(err);
      });
  };

  useEffect(() => {
    loadAllSpeakers();
  }, []);
  console.log(isallowed);
  if (isallowed) {
    return (
      <SummarySidebar id={props.match.params.wemeetId}>
        <div className="dashboard_wrapper">
          <h1 className="WeMeet_Dashboard_heading WeMeet_Main_Dashboard_heading ">
            Speakers & Hosts
          </h1>
          <h6 className="WeMeet_Dashboard_heading">
            Manage your speakers and add them to sessions
          </h6>
          <div className="AllSpeakers">
            <div className="row">
              {AllSpeakers &&
                !!AllSpeakers.length &&
                AllSpeakers.map((speaker) => (
                  <SpeakerCard
                    {...props}
                    name={speaker.name}
                    designation={speaker.designation}
                    organization={speaker.organization}
                    sessions={speaker.sessions.toString()}
                    profilePicUrl={speaker.profilePicUrl}
                    email={speaker.email}
                  />
                ))}
            </div>
          </div>
        </div>
      </SummarySidebar>
    );
  } else {
    return (
      <div>
        <h3>You are not allowed to access this page</h3>
      </div>
    );
  }
};

export default SpeakersHosts;
