import React, { useState } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Close from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

import { useStyles } from "./CreateWeMeetForm.styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CreateWeMeetForm = () => {
  const classes = useStyles();
  const [lounge, loungeStatus] = useState(false);
  const [meetVisibility, setMeetVisibility] = useState(false);
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    visibility: "Private",
    loungeTables: "0",
  });

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    alert("form submitted");
  };

  const handleLounge = (event) => {
    loungeStatus(event.target.checked);
  };

  const handleMeetVisibility = (event) => {
    setMeetVisibility(event.target.checked);
    setFormValues({
      ...formValues,
      [event.target.name]: meetVisibility ? "Private" : "Public",
    });
  };

  return (
    <div className={classes.popup}>
      <ThemeProvider theme={theme}>
        <form
          onSubmit={handleSubmit}
          className={classes.form}
          autoComplete="off"
        >
          <div className={classes.header}>
            <h3 className={classes.title}>CREATE WEMEET</h3>
            <Close style={{ cursor: "pointer" }} />
          </div>
          <div>
            <TextField
              required
              name="title"
              onChange={handleChange}
              className={classes.textfield}
              id="outlined-basic"
              label="WeMeet Title"
              placeholder="Please add a descriptive event name."
              variant="outlined"
            />
            <TextField
              required
              name="description"
              onChange={handleChange}
              className={classes.textfield}
              id="outlined-basic"
              label="Description"
              placeholder="Add a short description of an event."
              variant="outlined"
            />
            <TextField
              required
              name="startDateTime"
              onChange={handleChange}
              className={classes.datetime}
              label="Start date and time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              required
              name="endDateTime"
              onChange={handleChange}
              className={classes.datetime}
              label="End date and time"
              type="datetime-local"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <div className={classes.subHeader}>
              <h3 className={classes.title}>
                WeMeet Visibility : {meetVisibility ? "Public" : "Private"}
              </h3>
              <Switch
                name="visibility"
                className={classes.switch}
                checked={meetVisibility}
                color="primary"
                onChange={handleMeetVisibility}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            <div className={classes.subHeader}>
              <h3 className={classes.title}>Enable Social Lounge</h3>
              <Switch
                className={classes.switch}
                checked={lounge}
                color="primary"
                onChange={handleLounge}
                name="loungeTable"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </div>
            {lounge ? (
              <TextField
                name="loungeTables"
                onChange={handleChange}
                type="number"
                InputProps={{ inputProps: { min: 0, max: 20 } }}
                className={classes.textfield}
                id="outlined-basic"
                label="Social Lounge"
                placeholder="Number of tables required (between 0 to 20)."
                variant="outlined"
              />
            ) : null}
          </div>
          <div className={classes.submit}>
            <Button type="submit" variant="contained" color="primary">
              CREATE WEMEET
            </Button>
          </div>
        </form>
      </ThemeProvider>
    </div>
  );
};

export default CreateWeMeetForm;
