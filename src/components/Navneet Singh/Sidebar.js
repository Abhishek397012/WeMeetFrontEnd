import React,{useState} from "react";
import { Link } from "react-router-dom";
import Dashboard from "./CommunityDashboard";
import WeMeets from "./WeMeets";

const Sidebar = ({id, children}) => {


  return (
    <div className="dash_container">
      <div className="sidebar">
        <div className="top-part-sidebar">
          <div className="name_img"></div>
          <p className="header_Name">User Name</p>
          <p className="header_Description">You are an Admin</p>
        </div>
        <nav className="clearfix s-navbar">
          <ul className="no_style">
            <li>
              <Link className="sidebar_links" to={`/${id}/dashboard`}>
                <i class="fas fa-th-large"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link className="sidebar_links" to={`/${id}/wemeets`}>
                <i class="fas fa-video"></i> WeMeets
              </Link>
            </li>
            <li>
              <Link className="sidebar_links" to={`/${id}/profile`}>
                <i class="fa fa-user"></i> Profile
              </Link>
            </li>
            {/* <li>
              <Link className="sidebar_links" to="/editProfile">
                <i class="fas fa-edit"></i>Edit Profile
              </Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="dash_content">{children}</div>
    </div>
  );
};

export default Sidebar;
