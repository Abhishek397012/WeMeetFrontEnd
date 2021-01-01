import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Dashboard from "./CommunityDashboard";
import WeMeets from "./WeMeets";
import {auth} from '../../firebase/firebase.utils'
import {getUserDetails} from './apiDash'
import {isAuthenticated} from '../Hardik/LogIn/apiLogin'

const Sidebar = ({children}) => {

  const {user} = isAuthenticated()

  const[USER, setUser] = useState({
    name: "", 
    profilePicUrl: "", 
    id: "", 
    designation: "", 
    organization: "", 
    city: "", 
    aboutMe: "", 
    country: "", 
    eventsHosted: [], 
  })

  const getUser = () => {
    const id=user.fid;
    getUserDetails(id)
      .then(data=>{
          setUser(data);
      })
      .catch(err=>{
        console.log(err);
      })
  }

  useEffect(() => {
    getUser();
  }, [])

  return (
    <div className="dash_container">
      <div className="sidebar">
        <div className="top-part-sidebar">
          <img className="name_img" src={USER.profilePicUrl} alt="Profile Img"/>
          <p className="header_Name">{USER.name}</p>
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
