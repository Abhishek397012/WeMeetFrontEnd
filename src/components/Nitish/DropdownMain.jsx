import React, { useState } from "react";
import { withRouter } from "react-router-dom";

import CreateWeMeetForm from "../Hardik/CreateWeMeetForm/CreateWeMeetForm";
import SignOut from "../Hardik/SignOut/SignOut";

import Button from "@material-ui/core/Button";
import PersonIcon from "@material-ui/icons/Person";
import DashboardIcon from "@material-ui/icons/Dashboard";

import { auth } from "../../firebase/firebase.utils";

import "./DropdownMain.css";

const DropdownMain = ({ history }) => {
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
            <Button
              onClick={() => {
                history.push("/profile");
                toggleHidden(!hidden);
              }}
              variant="contained"
              style={{ marginBottom: "5px" }}
            >
              <PersonIcon style={{ marginRight: "10px" }} /> My Profile
            </Button>
            <Button
              onClick={() => {
                history.push("/dashboard");
                toggleHidden(!hidden);
              }}
              variant="contained"
              style={{ marginBottom: "5px" }}
            >
              <DashboardIcon style={{ marginRight: "10px" }} /> Dashbord
            </Button>
            <SignOut />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(DropdownMain);
