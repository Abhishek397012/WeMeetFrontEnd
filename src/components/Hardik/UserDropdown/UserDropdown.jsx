import React from "react";

import LogIn from "../LogIn/LogIn";
import DropdownMain from "../../Nitish/DropdownMain";

import { auth } from "../../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const UserDropdown = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? (
        <div>
          <DropdownMain />
        </div>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default UserDropdown;
