import React from "react";

import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import { signInWithGoogle } from "../../../firebase/firebase.utils";

const SignInGoogle = () => {
  return (
    <div className="signin" style={{ margin: "5px" }}>
      <Button
        variant="contained"
        onClick={signInWithGoogle}
        style={{ width: "100%" }}
      >
        <Icon className="fab fa-google" style={{ paddingRight: "10px" }} />
        Continue with Google
      </Button>
    </div>
  );
};

export default SignInGoogle;
