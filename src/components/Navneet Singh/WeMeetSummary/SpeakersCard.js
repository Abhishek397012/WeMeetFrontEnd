import React, { Fragment } from "react";
import "../styles.css";
import "./styles.css";
import Default from "../images/defaultspeaker.png";
import { deleteSpeaker } from "./apiDash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { isAuthenticated } from "../../Hardik/LogIn/apiLogin";

toast.configure();

const SpeakerCard = (props) => {
  const { user } = isAuthenticated();
  const {
    name,
    designation,
    organization,
    sessions,
    profilePicUrl,
    email,
  } = props;
  const speaker = {
    name: name,
    designation: designation,
    organization: organization,
    sessions: sessions.length == 0 ? [] : sessions,
    profilePicUrl: profilePicUrl,
    email: email,
  };
  const deletetheSpeaker = () => {
    // console.log("hello from delete");
    // console.log(speaker);
    deleteSpeaker(user._id, props.match.params.wemeetId, speaker)
      .then((data) => {
        toast.success("Speaker Deleted Successfully!!", {
          position: toast.POSITION.TOP_CENTER,
        });
        setTimeout(() => window.location.reload(), 4000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            <button class="btn btn-dark" onClick={deletetheSpeaker}>
              <i class="fas fa-trash "></i>
            </button>
          </div>
        </div>
        <h3 className="speakerName">{name.toUpperCase()}</h3>
        <h4 className="speakerDesignation">
          {designation.toUpperCase()} , {organization.toUpperCase()}
        </h4>
        <h4 className="speakerDesignation">Sessions: {sessions.toString()}</h4>
      </div>
    </Fragment>
  );
};

export default SpeakerCard;
