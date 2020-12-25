import React from 'react';
import "./navbar.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
</style>

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/images/logo.jpg" alt="" width="45" height="45" class="d-inline-block  change " />
            <span className="color">  WeMeet</span>
          </a>
          <form class="d-flex shift">
          <a class="btn btn-primary shift1" href="#" role="button"><span className="color">Create an WeMeet</span></a>
            <div class="dropdown">
              <button class="dropbtn">v</button>
              <div class="dropdown-content">
                <a href="#"><PersonIcon /> My Profile</a>
                <a href="#"><DashboardIcon /> Dashbord</a>
                <a href="#"><ExitToAppIcon /> Logout</a>
              </div>
            </div>
          </form>
        </div>
      </nav>

    </>


  );


}

export default Navbar;