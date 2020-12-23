import React from 'react';
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PersonIcon from '@material-ui/icons/Person';
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
</style>
function Navbar1() {
  return (
    <>
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="/images/logo.jpg" alt="" width="45" height="45" class="d-inline-block  change "  />
      <span className="color">  WeMeet</span>
    </a>
    <form class="d-flex">
    <button class="btn btn-primary" type="submit"><PersonIcon /> Login</button>
    </form>
  </div>
</nav>

  <img src="/images/background.jpg" alt="Snow" class="size"/>

  <a class="btn1 btn btn-primary" href="#" role="button"> <AddCircleIcon /> <span className="small1">Host a Free Event</span></a>
  <a class="btn2 btn btn-dark" href="#" role="button"> <PlayCircleFilledIcon/> <span className="small1">Take a Video Tour</span></a>
  


</>
    );
}

export default Navbar1;