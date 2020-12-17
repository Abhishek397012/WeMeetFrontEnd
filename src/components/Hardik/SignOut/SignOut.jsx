import React from "react";

import { auth } from "../../../firebase/firebase.utils";

import Button from "@material-ui/core/Button";

const SignOut = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => auth.signOut()}>
        Sign Out
      </Button>
    </div>
  );
};

export default SignOut;
