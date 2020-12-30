import SidebarLayout from "./Sidebar";
import React, {useState, useEffect} from 'react'
import Circle from "./Circle";
import ProfileUpcoming from "./ProfileUpcoming";
import ProfilePast from "./ProfilePast";
import Container from "./Container";
import {auth} from '../../firebase/firebase.utils'


const Profile = (props) => {
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.profileimage.value);
    console.log(event.target.name.value);
    console.log(event.target.designation.value);
    console.log(event.target.organization.value);
    console.log(event.target.city.value);
    console.log(event.target.country.value);
    console.log(event.target.aboutme.value);
  };

  const [user, setUser] = useState({
    name: "", 
    profilePicUrl: "", 
    id: "", 
    designation: "", 
    organization: "", 
    city: "", 
    aboutMe: "", 
    country: "", 
    eventsHosted: [], 
  })

  const getUser=()=>{
    const name=auth.currentUser.displayName;
    const profilePicUrl=auth.currentUser.photoURL;
    const id=auth.currentUser.uid;
    setUser({name, profilePicUrl, id})
    console.log(user);
  }

  useEffect(()=>{
    getUser()
  }, [])


  return (
    <SidebarLayout>
      <div className="dashboard_wrapper">
        <div className="user_details">
          <div className="profile_header">Details</div>
          <div className="detail_content_profile">
            <Circle url={user.profilePicUrl}/>
            <div className="profile_rem_content">
              <div className="profile_name">{user.name}</div>
              <div className="profile_other">
                {
                  user.designation && (
                    <div className="other_stuff">
                      <span className="label">Designation: </span>
                      <span className="other_content">{user.designation}</span>
                    </div>
                  )
                }
                {
                  user.location && (
                    <div className="other_stuff">
                      <span className="label">Location: </span>
                      <span className="other_content">{user.city}, {user.country} </span>
                    </div>
                  )
                }

                {
                  user.organization && (                    
                  <div className="other_stuff">
                    <span className="label">Organization: </span>
                    <span className="other_content">{user.organization} </span>
                  </div>
                  )
                }

                <div className="other_stuff">
                  <span className="other_content">
                    {" "}
                    <Container triggerText="Edit Profile" onSubmit={onSubmit} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_upcoming">
          <div className="profile_header">Upcoming Events</div>
          <ProfileUpcoming />
        </div>
        <div className="profile_past">
          <div className="profile_header">Past Event</div>
          <ProfilePast />
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Profile;
