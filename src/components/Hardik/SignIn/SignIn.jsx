import React from "react";

import Button from "@material-ui/core/Button";

import SignOut from "../SignOut/SignOut";

import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="signin">
      {user ? (
        <SignOut />
      ) : (
        <Button variant="contained" onClick={signInWithGoogle}>
          Sign In with Google
        </Button>
      )}
    </div>
  );
};

export default SignIn;
