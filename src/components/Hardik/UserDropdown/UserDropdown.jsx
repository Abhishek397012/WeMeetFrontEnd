import React from "react";

import LogIn from "../LogIn/LogIn";
import DropdownMain from "../../Nitish/DropdownMain";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";

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
        <ErrorBoundry>
          <LogIn />
        </ErrorBoundry>
      )}
    </>
  );
};

export default UserDropdown;
