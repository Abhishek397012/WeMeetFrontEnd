import React, { Fragment } from "react";
import "../styles.css";
import "./styles.css";
import Default from "../images/defaultspeaker.png";
import { isAuthenticated } from "../../Hardik/LogIn/apiLogin";
const SpeakerCard = (props) => {
  return (
    <Fragment>
      <div className="col-sm-8 col-md-6 col-lg-4 SpeakerCard">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <img
              className="speakerimg"
              src={props.profilePicUrl}
              alt="speakerimg"
            />
          </div>
          <div className="removespeaker col-sm-6 col-md-6 col-lg-6">
            <i class="fas fa-trash "></i>
          </div>
        </div>
        <h3 className="speakerName">{props.name}</h3>
        <h4 className="speakerDesignation">
          {props.designation} , {props.organization}
        </h4>
        <h4 className="speakerDesignation">Session: {props.sessions}</h4>
      </div>
    </Fragment>
  );
};

export default SpeakerCard;
