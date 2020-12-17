import React from "react";

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
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      )}
    </div>
  );
};

export default SignIn;
