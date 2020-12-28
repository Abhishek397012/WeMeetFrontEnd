import React from "react";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddCircleIcon from "@material-ui/icons/AddCircle";

import backgroundImg from "./background.jpg";

import "./styles.css";

const LandingPage = () => {
  return (
    <>
      <img src={backgroundImg} alt="Snow" className="size" />
      <a className="btn1 btn btn-primary" href="#root" role="button">
        <AddCircleIcon /> <span className="small1">Host a Free Event</span>
      </a>
      <a className="btn2 btn btn-dark" href="#root" role="button">
        <PlayCircleFilledIcon />
        <span className="small1">Take a Video Tour</span>
      </a>
    </>
  );
};

export default LandingPage;
