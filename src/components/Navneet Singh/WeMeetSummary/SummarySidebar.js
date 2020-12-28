import React from "react";
import { Link } from "react-router-dom";
 

const SummarySidebar = (props) => {
  return (
    <div className="dash_container">
      <div className="sidebar">
            <div className="top_summary_sidebar">
              <Link to="/dashboard">
                <button className="btn-primary back-btn"> &lt; Back to Dashboard</button>
              </Link>
              <p className="header_name_summary">Event Name</p>
              <p className="header_date_summary">Sunday 27 December, 2020</p>
              <button className="btn btn-warning start_summary">Start WeMeet <i class="fa fa-info-circle" aria-hidden="true"></i></button>
            </div>
            <div className="bottom_summary_sidebar"></div>
      </div>
      <div className="dash_content">{props.children}</div>
    </div>
  );
};

export default SummarySidebar;
