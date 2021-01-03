import React, { useState, useEffect } from "react";

import SignInGoogle from "../SignInGoogle/SignInGoogle";
import SignInFb from "../SignInFb/SignInFb";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";

import { styles } from "./LogIn.styles";

import { auth } from "../../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

import { login, authenticate } from "./apiLogin";

const useStyles = makeStyles((theme) => styles);

const LogIn = () => {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);
  const [user] = useAuthState(auth);

  const userStuff = () => {
    setVisibility(false);
  };

  useEffect(() => {
    if (user) {
      let name = user.displayName;
      let fid = user.uid;
      let profilePicUrl = user.photoURL;

      login({
        name,
        fid,
        profilePicUrl,
        designation: "",
        organization: "",
        city: "",
        aboutMe: "",
        eventsHosted: [],
        country: "",
      })
        .then((data) => {
          authenticate(data, () => {
            console.log(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          return setVisibility(true);
        }}
      >
        <PersonIcon style={{ margin: "0 5px 0 0" }} />
        Log in
      </Button>
      {isVisible ? (
        <div className={classes.popUp}>
          <div className={classes.main}>
            <div className={classes.header}>
              <h3 className={classes.title}>Log In</h3>
              <Close
                onClick={() => setVisibility(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            {user ? userStuff() : null}
            <ErrorBoundry>
              <SignInGoogle />
              <SignInFb />
            </ErrorBoundry>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LogIn;
