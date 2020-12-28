import React from "react";
import SidebarLayout from "./Sidebar";
import "./styles.css";
import Card from "./Card";
import MonthlyWeMeets from "./MonthlyWeMeets";

const CommunityDashboard = () => {
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
          <Card value="4" title="Team WeMeets" />
          <Card title="Total Speaker" />
          <Card title="Total Registration" />
          <Card title="Total Attendee" />
        </div>
        <h5 className="WeMeet_Dashboard_heading WeMeet_Main_Dashboard_heading ">
          ALL WeMeets
        </h5>
        <MonthlyWeMeets month="Dec 2020" />
      </div>
    </SidebarLayout>
  );
};

export default CommunityDashboard;
