import React, { useState } from "react";

import CreateWeMeetForm from "../Hardik/CreateWeMeetForm/CreateWeMeetForm";
import SignOut from "../Hardik/SignOut/SignOut";

import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";

import { auth } from "../../firebase/firebase.utils";

import "./DropdownMain.css";

const DropdownMain = () => {
  const [hidden, toggleHidden] = useState(false);

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
            <a href="#root">
              <PersonIcon /> My Profile
            </a>
            <a href="#root">
              <DashboardIcon /> Dashbord
            </a>
            <SignOut />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DropdownMain;
