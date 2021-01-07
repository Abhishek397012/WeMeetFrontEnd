import React, { useState, useEffect } from "react";
import SummarySidebar from "./SummarySidebar.js";
import "./styles.css";
import SpeakerCard from "./SpeakersCard";
import { getAllSpeakers } from "./apiDash";
import { isAuthenticated } from "../../Hardik/LogIn/apiLogin";

const SpeakersHosts = (props) => {
  const { user } = isAuthenticated();

  const [AllSpeakers, setAllSpeakers] = useState({});
  const [error, SetError] = useState(false);
  const [found, setFound] = useState(false);
  const loadAllSpeakers = () => {
    // Get the information from the database
    getAllSpeakers(user._id)
      .then((data) => {
        setAllSpeakers(data);
        console.log(data);
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
            {/* <SpeakerCard
              name="Prem"
              designation="Student"
              organization="NITD"
              sessions={["welcome", "introduction"].toString()}
            /> */}

            {AllSpeakers &&
              !!AllSpeakers.length &&
              AllSpeakers.map((speaker) => (
                <SpeakerCard
                  name={speaker.name}
                  designation={speaker.designation}
                  organization={speaker.organization}
                  sessions={["welcome", "introduction"].toString()}
                  profilePicUrl={speaker.profilePicUrl}
                />
              ))}
          </div>
        </div>
      </div>
    </SummarySidebar>
  );
};

export default SpeakersHosts;
