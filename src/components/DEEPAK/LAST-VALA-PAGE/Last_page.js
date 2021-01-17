import React, { Component, useEffect, useState, useRef } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sticker_last_page.scss";
import "./index-last.css";
import defImg from '../../Navneet Singh/images/default.jpg'

import Sidesticker from "./Sidesticker";
import Hostname from "./Hostname";

import {isAuthenticated} from '../../Hardik/LogIn/apiLogin'
import {getMeet, getHost} from './apiEvent'

const Last_page = (props) => {

  const[Wemeet, setWemeet] = useState({});
  const[HostId, setHostId] = useState(""); 
  const {user} = isAuthenticated();

  useEffect(() => {
    // Getting the wemeet to display
    getMeet(user._id, props.match.params.wemeetId)
    .then(data=>{
      setWemeet(data.wemeet);
      setHostId(data.wemeet.hostId);
      getHost(data.wemeet.hostId)
      .then(host=>{
        console.log(host);
      })
      .catch(err=>{
        console.log(err);
      })
    })
    .catch(err=>{
      console.log(err);
    })

  }, [])

  return (
    <>
      <div class="container-fluid special-margin ">
        <div class="row">
          <div class="col-6">
            <div class="row ml-5">
              <div class="col">
                <img
                  src={defImg}
                  alt="mike-pic"
                  className="mike_pic"
                />
              </div>
            </div>

            <div class="row whiteColor ml-5">
              <div class="col">
                <h3 className="headingColor">ABOUT THIS EVENT</h3>
                <br />
                <h4>{Wemeet.description}</h4>
                <hr />
              </div>
            </div>

            <div class="row whiteColor ml-5">
              <div class="col">
                <h3 className="headingColor">SCHEDULE</h3>
                <br />
                <div className="schedule-card ">
                  <h4>Friday</h4>
                  <h4>Dec 25</h4>
                  <h4>2020</h4>
                </div>
                <br />
                <br />
                <h4>5:00 PM - 5:30 PM</h4>
                <hr />
              </div>
            </div>
            <div class="row whiteColor ml-5 ">
              <div class="col">
                <br />
                <h3 className="headingColor">HOST</h3>
                <Hostname />
              </div>
            </div>
          </div>
          <div class="col-6">
            <Sidesticker wemeet={Wemeet}/>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
} 


export default Last_page;
