import React, { useState, useEffect } from "react";
import SidebarLayout from "./Sidebar";
import "./styles.css";
import Card from "./Card";
import MonthlyWeMeets from "./MonthlyWeMeets";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";
import { getAllWeMeetDetails, getAllWeMeets } from "./apiDash";
import moment from "moment";

const CommunityDashboard = (props) => {
  const { user } = isAuthenticated();

  const [AllWeMeets, setAllWeMeets] = useState({});
  const [AllWeMeetsDetails, setAllWeMeetsDetails] = useState({});
  const [error, SetError] = useState(false);
  const [found, setFound] = useState(false);
  const [shown1, setShown1] = useState(false);
  const [shown2, setShown2] = useState(false);
  const loadAllWemeetsDetails = () => {
    // Get the information from the database
    getAllWeMeetDetails(user._id)
      .then((data) => {
        setAllWeMeetsDetails(data);
        if (AllWeMeetsDetails) {
          setFound(true);
        }
      })
      .catch((err) => {
        SetError(err);
        console.log(err);
      });
  };
  const loadAllWemeets = () => {
    // Get the information from the database
    getAllWeMeets(user._id)
      .then((data) => {
        setAllWeMeets(data);
        if (AllWeMeets) {
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
    loadAllWemeets();
    loadAllWemeetsDetails();
  }, []);

  return (
    <SidebarLayout>
      <div className="dashboard_wrapper">
        <h1 className="WeMeet_Dashboard_heading WeMeet_Main_Dashboard_heading ">
          WeMeets
        </h1>
        <h6 className="WeMeet_Dashboard_heading">
          View and manage all your WeMeets, past and future.
        </h6>
        <div className="row">
          <Card value={AllWeMeetsDetails.TeamWeMeets} title="Team WeMeets" />
          <Card value={AllWeMeetsDetails.TotalSpeakers} title="Total Speaker" />
          <Card
            value={AllWeMeetsDetails.TotalRegistrations}
            title="Total Registration"
          />
          <Card
            value={AllWeMeetsDetails.TotalAttendee}
            title="Total Attendee"
          />
        </div>
        <h5 className="WeMeet_Dashboard_heading WeMeet_Main_Dashboard_heading ">
          ALL WeMeets
        </h5>

        {AllWeMeets &&
          !!AllWeMeets.length &&
          AllWeMeets.map((event) => (
            <MonthlyWeMeets month={event.WemeetTime} wemeets={event.Wemeets} />
          ))}
      </div>
    </SidebarLayout>
  );
};

export default CommunityDashboard;
