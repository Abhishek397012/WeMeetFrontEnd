import React, { useState, useEffect } from "react";

import CreateWeMeetForm from "../Hardik/CreateWeMeetForm/CreateWeMeetForm";
import SignOut from "../Hardik/SignOut/SignOut";
import {Link} from 'react-router-dom'
import DashboardIcon from "@material-ui/icons/Dashboard";

import { auth } from "../../firebase/firebase.utils";

import "./DropdownMain.css";

const DropdownMain = () => { 
  const [hidden, toggleHidden] = useState(false);
  const [userId, setUserId] = useState('');

  const getUserId = () =>{
    const id = auth.currentUser.uid;
    setUserId(id);
    console.log(userId);
  }

  useEffect(() => {
    getUserId();
  }, [])

  return (
    <div className="shift">
      <CreateWeMeetForm />
      <div className="dropdown">
        <div className="dropbtn" onClick={() => toggleHidden(!hidden)}>
          <img
            src={auth.currentUser.photoURL}
            alt="User Img"
            height="100%"
            width="100%"
          />
        </div>
        {hidden ? (
          <div className="dropdown-content">
            <Link to={`/${userId}/dashboard`} style={{marginBottom: "10px", marginTop: "10px"}}>
              <DashboardIcon /> Dashbord
            </Link>
            <SignOut />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropdownMain;
