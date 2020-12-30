import React, {useEffect} from "react";

import LogIn from "../LogIn/LogIn";
// import NewSessionForm from "../NewSessionForm/NewSessionForm";
import DropdownMain from "../../Nitish/DropdownMain";

import { auth } from "../../../firebase/firebase.utils";
import { useAuthState } from "react-firebase-hooks/auth";

const UserDropdown = () => {
  const [user] = useAuthState(auth);



  return (
    <div>
      {user ? (
        <div>
          <DropdownMain />
          {/* <NewSessionForm /> */}
        </div>
      ) : (
        <LogIn />
      )}
    </div>
  );
};

export default UserDropdown;
