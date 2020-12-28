import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Logo from "./logo.jpg";

import SignIn from "../LogIn/LogIn";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000",
    position: "fixed",
    width: "100vw",
    zIndex: "20",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#fff",
  },
  image: {
    height: "40px",
    borderRadius: "50%",
  },
  title: {
    flexGrow: 1,
    color: "#fff",
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
          >
            <img className={classes.image} src={Logo} alt="App Logo" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            WeMeet
          </Typography>
          <SignIn />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
