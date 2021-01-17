import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWeMeet } from "./apiSummaryDashboard";
import { isAuthenticated } from "../../Hardik/LogIn/apiLogin";

const SummarySidebar = (props) => {
  const { user } = isAuthenticated();
  const [wemeet, setWemeet] = useState({
    status: 0,
    title: "",
    startDateTime: "",
  });

  useEffect(() => {
    getWeMeet(user._id, props.id)
      .then((data) => {
        setWemeet({
          ...wemeet,
          status: data.wemeet.status,
          title: data.wemeet.title,
          startDateTime: data.wemeet.startDateTime,
        });
        console.log(wemeet);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dash_container">
      <div className="sidebar">
        <div className="top_part_summary">
          <Link to="/dashboard" className="btn_back_summary">
            <button>
              <i class="fas fa-chevron-left"></i> Back To Dashboard
            </button>
          </Link>
          <p className="event_name_summary">{wemeet.title}</p>
          <p className="event_date_summary">
            {console.log(new Date(wemeet.startDateTime).toDateString())}
            {new Date(wemeet.startDateTime).toDateString()}
          </p>

          {wemeet.status === 0 && (
            <Link to="/dashboard" className="btn_sw_summ">
              <button>
                Start WeMeet{" "}
                <i class="fa fa-info-circle" aria-hidden="true"></i>
              </button>
            </Link>
          )}
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
