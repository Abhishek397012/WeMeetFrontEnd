import React from "react";
import { withRouter, Redirect } from "react-router-dom";

import { auth } from "../../../firebase/firebase.utils";
import { signout } from '../LogIn/apiLogin'
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const SignOut = ({ history }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        signout()
          .then(data => {
            auth.signOut();
          })
          .catch(err => {
            console.log(err);
          })
        history.push("/");
      }}
    >
      <ExitToAppIcon style={{ marginRight: "10px" }} />
      Sign Out
    </Button>
  );
};

export default withRouter(SignOut);
