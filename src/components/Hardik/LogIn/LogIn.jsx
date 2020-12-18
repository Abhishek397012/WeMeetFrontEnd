import React, { useState } from "react";

import SignInGoogle from "../SignInGoogle/SignInGoogle";
import SignInFb from "../SignInFb/SignInFb";
import SignOut from "../SignOut/SignOut";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Close from "@material-ui/icons/Close";

import { auth } from "../../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const useStyles = makeStyles((theme) => ({
  popUp: {
    backgroundColor: "rgba(0,0,0,0.5)",
    overflow: "visible",
    position: "fixed",
    left: "0",
    top: "0",
    zIndex: "100",
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    backgroundColor: "#212529",
    borderRadius: "10px",
    padding: "20px",
  },
  header: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    padding: "0",
    margin: "0",
    fontSize: "20px",
  },
}));

const LogIn = () => {
  const classes = useStyles();
  const [isVisible, setVisibility] = useState(false);
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <SignOut />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            return setVisibility(true);
          }}
        >
          Log in
        </Button>
      )}
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
            <SignInGoogle />
            <SignInFb />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LogIn;
