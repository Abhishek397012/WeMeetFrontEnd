import React from "react";

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";
import backgroundImg from "./background.jpg";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";

import "./styles.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const LandingPage = () => {
  const { user } = isAuthenticated();

  const notify = () => {
    toast.error("Please Login To Host Your Event", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <>
      <img src={backgroundImg} alt="Snow" className="size" />

      {user ? (
        <Link className="btn1 btn btn-primary" to="/dashboard">
          <AddCircleIcon /> <span className="small1">Host a Free Event</span>
        </Link>
      ) : (
        <Link className="btn1 btn btn-primary" to="/" onClick={notify}>
          <AddCircleIcon /> <span className="small1">Host a Free Event</span>
        </Link>
      )}
      <a className="btn2 btn btn-dark" href="#root" role="button">
        <PlayCircleFilledIcon />
        <span className="small1">Take a Video Tour</span>
      </a>
    </>
  );
};
export default LandingPage;
