import React from "react";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import { signInWithFacebook } from "../../../firebase/firebase.utils";

const SignInFb = () => {
  return (
    <div style={{ margin: "5px" }}>
      <Button
        variant="contained"
        onClick={signInWithFacebook}
        style={{ width: "100%" }}
      >
        <Icon className="fab fa-facebook" style={{ paddingRight: "10px" }} />
        Continue with Facebook
      </Button>
    </div>
  );
};

export default SignInFb;
