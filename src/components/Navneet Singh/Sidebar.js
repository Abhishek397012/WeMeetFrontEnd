import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";

const Sidebar = ({ children }) => {
  const { user } = isAuthenticated();

  return (
    <div className="dash_container">
      <div className="sidebar">
        <div className="top-part-sidebar">
          <img
            className="name_img"
            src={user.profilePicUrl}
            alt="Profile Img"
          />
          <p className="header_Name">{user.name}</p>
          <p className="header_Description">You are an Admin</p>
        </div>
        <nav className="clearfix s-navbar">
          <ul className="no_style">
            <li>
              <Link className="sidebar_links" to={`/dashboard`}>
                <i className="fas fa-th-large"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link className="sidebar_links" to={`/wemeets`}>
                <i className="fas fa-video"></i> WeMeets
              </Link>
            </li>
            <li>
              <Link className="sidebar_links" to={`/profile`}>
                <i className="fa fa-user"></i> Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="dash_content">{children}</div>
    </div>
  );
};

export default Sidebar;
