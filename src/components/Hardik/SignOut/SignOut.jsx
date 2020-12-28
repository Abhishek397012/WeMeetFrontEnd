import React from "react";

import { auth } from "../../../firebase/firebase.utils";

import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const SignOut = () => {
  return (
    <Button variant="contained" color="primary" onClick={() => auth.signOut()}>
      <ExitToAppIcon style={{ marginRight: "10px" }} />
      Sign Out
    </Button>
  );
};

export default SignOut;
