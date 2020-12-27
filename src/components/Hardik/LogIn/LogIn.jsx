import React, { useState } from "react";

import SignInGoogle from "../SignInGoogle/SignInGoogle";
import SignInFb from "../SignInFb/SignInFb";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";

import { styles } from "./LogIn.styles";

import { auth } from "../../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => styles);

const LogIn = () => {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);
  const [user] = useAuthState(auth);

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
            {user ? setVisibility(false) : null}
            <SignInGoogle />
            <SignInFb />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LogIn;