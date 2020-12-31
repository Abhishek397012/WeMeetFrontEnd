import React, { useState } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

import Close from "@material-ui/icons/Close";

import { useStyles } from "./NewSessionForm.styles";

import { auth } from "../../../firebase/firebase.utils";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// set type = 1 for create form and 0 for edit form
// must sent default values for data prop
const NewSessionForm = ({ type, data }) => {
  const classes = useStyles();
  const { title, summary, datetime, duration } = data;
  const [formVisibility, setFormVisibility] = useState(false);
  const [formValues, setFormValues] = useState({
    hostId: "",
    title: "",
    description: "",
    startDateTime: "",
    duration: "0",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, hostId: auth.currentUser.uid });
    console.log(datetime);
    alert("form submitted");
    setFormVisibility(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setFormVisibility(true)}
      >
        {Number(type) ? (
          <>
            <Icon
              className="fa fa-plus-circle"
              style={{ marginRight: "10px" }}
            />
            New Session
          </>
        ) : (
          <>
            <Icon className="fa fa-edit" style={{ marginRight: "10px" }} />
            Edit
          </>
        )}
      </Button>
      {formVisibility ? (
        <div className={classes.popup}>
          <ThemeProvider theme={theme}>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              autoComplete="off"
            >
              <div className={classes.header}>
                <h3 className={classes.title}>CREATE NEW SESSION</h3>
                <Close
                  style={{ cursor: "pointer" }}
                  onClick={() => setFormVisibility(false)}
                />
              </div>
              <div>
                <TextField
                  required
                  name="title"
                  onChange={handleChange}
                  className={classes.textfield}
                  id="outlined-basic"
                  label="Session Title"
                  placeholder="Please add a clear name for session."
                  defaultValue={title}
                  variant="outlined"
                />
                <TextField
                  required
                  name="description"
                  onChange={handleChange}
                  className={classes.textfield}
                  id="outlined-basic"
                  label="Session Summary"
                  placeholder="Add a descriptive summary."
                  defaultValue={summary}
                  variant="outlined"
                />
                <TextField
                  required
                  name="startDateTime"
                  onChange={handleChange}
                  className={classes.datetime}
                  label="Start date and time"
                  type="datetime-local"
                  defaultValue={datetime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  required
                  name="duration"
                  onChange={handleChange}
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 300 } }}
                  className={classes.textfield}
                  id="outlined-basic"
                  label="Duration"
                  placeholder="Duration of session in minutes."
                  variant="outlined"
                  defaultValue={duration}
                />
              </div>
              <div className={classes.submit}>
                <Button type="submit" variant="contained" color="primary">
                  CREATE NEW SESSION
                </Button>
              </div>
            </form>
          </ThemeProvider>
        </div>
      ) : null}
    </>
  );
};

export default NewSessionForm;
