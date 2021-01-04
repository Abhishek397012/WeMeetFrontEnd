import React from "react";
import { withRouter } from "react-router-dom";

import { auth } from "../../../firebase/firebase.utils";

import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const SignOut = ({ history }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => {
        auth.signOut();
        history.push("/");
      }}
    >
      <ExitToAppIcon style={{ marginRight: "10px" }} />
      Sign Out
    </Button>
  );
};

export default withRouter(SignOut);
