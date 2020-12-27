import React from "react";

import UserDropdown from "../Hardik/UserDropdown/UserDropdown";

import Logo from "./logo.jpg";

import "./styles.css";

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#root">
          <img
            src={Logo}
            alt=""
            width="45"
            height="45"
            className="d-inline-block  change"
          />
          <span className="color"> WeMeet</span>
        </a>
        <div className="d-flex">
          <UserDropdown />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
