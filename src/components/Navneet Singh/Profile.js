import SidebarLayout from "./Sidebar";
import React, { useState, useEffect } from "react";
import Circle from "./Circle";
import ProfileUpcoming from "./ProfileUpcoming";
import ProfilePast from "./ProfilePast";
import Container from "./Container";
import { auth } from "../../firebase/firebase.utils";
import { getUserDetails, update } from "./apiDash";
import { isAuthenticated } from "../Hardik/LogIn/apiLogin";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure();

const Profile = (props) => {
  const { token, user } = isAuthenticated();

  const onSubmit = (event) => {
    event.preventDefault(event);
    const id = user.fid;
    const User = {
      fid: id,
      designation: event.target.designation.value,
      organization: event.target.organization.value,
      city: event.target.city.value,
      aboutMe: event.target.aboutme.value,
      country: event.target.country.value,
    };
    update(id, token, User)
      .then((data) => {
        toast.success("Profile Updated Successfully", { position: toast.POSITION.TOP_CENTER })
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [USER, setUser] = useState({
    name: "",
    profilePicUrl: "",
    id: "",
    designation: "",
    organization: "",
    city: "",
    aboutMe: "",
    country: "",
    eventsHosted: [],
  });

  const getUser = () => {
    const id = user.fid;
    getUserDetails(id)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <SidebarLayout>
      <div className="dashboard_wrapper">
        <div className="user_details">
          <div className="profile_header">Details</div>
          <div className="detail_content_profile">
            <Circle url={USER.profilePicUrl} />
            <div className="profile_rem_content">
              <div className="profile_name">{USER.name}</div>
              <div className="profile_other">
                {USER.designation && (
                  <div className="other_stuff">
                    <span className="label">Designation: </span>
                    <span className="other_content">{USER.designation}</span>
                  </div>
                )}
                {USER.city && USER.country && (
                  <div className="other_stuff">
                    <span className="label">Location: </span>
                    <span className="other_content">
                      {USER.city}, {USER.country}{" "}
                    </span>
                  </div>
                )}
                {USER.city && !USER.country && (
                  <div className="other_stuff">
                    <span className="label">City: </span>
                    <span className="other_content">
                      {USER.city}
                    </span>
                  </div>
                )}
                {USER.country && !USER.city && (
                  <div className="other_stuff">
                    <span className="label">Country: </span>
                    <span className="other_content">
                      {USER.country}
                    </span>
                  </div>
                )}

                {USER.organization && (
                  <div className="other_stuff">
                    <span className="label">Organization: </span>
                    <span className="other_content">{USER.organization} </span>
                  </div>
                )}


                
                <div className="other_stuff">
                  <span className="other_content">
                    {" "}
                    <Container triggerText="Edit Profile" onSubmit={onSubmit} />
                  </span>
                </div>

              </div>
              <div style={{marginLeft:"4em"}}>
                  {USER.aboutMe && (
                    <div className="other_stuff">
                      <span className="label">About Me: </span>
                      <span className="other_content">{USER.aboutMe} </span>
                    </div>
                  )}
                </div>
            </div>
          </div>
        </div>
        <ProfileUpcoming />
        <ProfilePast />
      </div>
    </SidebarLayout>
  );
};

export default Profile;
