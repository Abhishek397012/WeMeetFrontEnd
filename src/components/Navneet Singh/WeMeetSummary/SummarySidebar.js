import React from "react";
import { Link } from "react-router-dom";

const SummarySidebar = (props) => {
  return (
    <div className="dash_container">
      <div className="sidebar">
        <div className="top_part_summary">
          <Link to="/dashboard" className="btn_back_summary">
            <button>
              <i class="fas fa-chevron-left"></i> Back To Dashboard
            </button>
          </Link>
          <p className="event_name_summary">Event Name</p>
          <p className="event_date_summary">Sunday December 27, 2020</p>
          <Link to="/dashboard" className="btn_sw_summ">
            <button>
              Start WeMeet <i class="fa fa-info-circle" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
        <div className="bottom_part_summary">
          <nav className="clearfix s-navbar">
            <ul className="no_style">
              <li>
                <Link
                  className="sidebar_links"
                  to={`/wemeets/${props.id}/summary`}
                >
                  Basic Info
                </Link>
              </li>
              <li>
                <Link
                  className="sidebar_links"
                  to={`/wemeets/${props.id}/sessions`}
                >
                  Sessions
                </Link>
              </li>
              <li>
                <Link
                  className="sidebar_links"
                  to={`/wemeets/${props.id}/speakers`}
                >
                  Speakers &amp; Hosts
                </Link>
              </li>
              <li>
                <Link
                  className="sidebar_links"
                  to={`/wemeets/${props.id}/registrants`}
                >
                  Registrants
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="dash_content">{props.children}</div>
    </div>
  );
};

export default SummarySidebar;
