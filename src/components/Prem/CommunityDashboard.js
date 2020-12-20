import React, { useState, useEffect } from "react";
import SidebarLayout from "./Sidebar";
import "./styles.css";
import ShowUpcoming from "./UpcomingDisplay";
import video from "./Video/walkthrough.mp4";

const CommunityDashboard = () => {
  const [upcomingEvent, setUpcomingEvent] = useState({});
  const [error, SetError] = useState(false);
  const [found, setFound] = useState(false);

  const loadUpcomingWemeet = () => {
    // Get the information from the database
  };

  useEffect(() => {
    loadUpcomingWemeet();
  }, []);

  const ShowWalkthrough = () => (
    <video
      width="400px"
      height="300px"
      style={{ borderRadius: "10px" }}
      controls
    >
      <source src={video} type="video/mp4" />
    </video>
  );

  return (
    <SidebarLayout>
      <div className="dashboard_wrapper">
        <h6 className="dashboard_heading">Upcoming WeMeets</h6>
        <ShowUpcoming setDefault={!found} />
        <div className="dashboard_bottom_wrapper">
          <div className="dashboard_bottom_content">
            <div className="row">
              <div className="col-7 bottom_left">
                <h6 className="bottom_heading">WeMeet guides and help</h6>
              </div>
              <div className="col-5" style={{ textAlign: "center" }}>
                {ShowWalkthrough()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default CommunityDashboard;
