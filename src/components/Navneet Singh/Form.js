import React, {useEffect, useState} from "react";
import {isAuthenticated} from '../Hardik/LogIn/apiLogin'
import {getUserDetails} from './apiDash'
export const Form = ({ onSubmit }) => {

  const {user} = isAuthenticated();
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
  })

  const getUser=()=>{
    const id=user.fid;
    getUserDetails(id)
      .then(data=>{
          console.log("Profile: ", data);
          setUser(data);
      })
      .catch(err=>{
        console.log(err);
      })
  }
  const handleChange = name => event => {
    const value = event.target.value;
    setUser({ ...USER, [name]: value });
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="designation">Designation</label>
        <input type="text" className="form-control" id="designation" value={USER.designation} onChange={handleChange('designation')}/>
      </div>
      <div className="form-group">
        <label htmlFor="organization">Organization</label>
        <input type="text" className="form-control" id="organization" value={USER.organization} onChange={handleChange('organization')}/>
      </div>
      <div className="row">
        <div className="form-group col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" value={USER.city} onChange={handleChange('city')}/>
        </div>
        <div className="form-group col-sm-12 col-md-6 col-lg-6">
          <label htmlFor="country">Country</label>
          <input type="text" className="form-control" id="country" value={USER.country} onChange={handleChange('country')}/>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="aboutme">About Me</label>
        <textarea className="form-control" id="aboutme" value={USER.aboutMe}onChange={handleChange('aboutMe')}/>
      </div>
      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Save
        </button>
      </div>
    </form>
  );
};
export default Form;
