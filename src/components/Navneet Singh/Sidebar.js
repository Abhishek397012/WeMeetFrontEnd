import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Dashboard from "./CommunityDashboard";
import WeMeets from "./WeMeets";
import {auth} from '../../firebase/firebase.utils'

const Sidebar = ({children}) => {

  const[user, setUser] = useState({
    name: "", 
    profilePicUrl: ""
  })

  const getUser = () => {
    setUser({
      name: auth.currentUser.displayName,
      profilePicUrl: auth.currentUser.photoURL
    })
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="dash_container">
      <div className="sidebar">
        <div className="top-part-sidebar">
          <img className="name_img" src={user.profilePicUrl} alt="Profile Img"/>
          <p className="header_Name">{user.name}</p>
          <p className="header_Description">You are an Admin</p>
        </div>
        <nav className="clearfix s-navbar">
          <ul className="no_style">
            <li>
              <Link className="sidebar_links" to={`/dashboard`}>
                <i class="fas fa-th-large"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link className="sidebar_links" to={`/wemeets`}>
                <i class="fas fa-video"></i> WeMeets
              </Link>
            </li>
            <li>
              <Link className="sidebar_links" to={`/profile`}>
                <i class="fa fa-user"></i> Profile
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
