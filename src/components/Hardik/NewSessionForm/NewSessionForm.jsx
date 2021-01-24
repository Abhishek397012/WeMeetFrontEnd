import { useState } from "react";
import { withRouter } from "react-router-dom";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Close from "@material-ui/icons/Close";

import { useStyles } from "./NewSessionForm.styles";

import { createSession, updateSession } from "./apiSessions";
import { isAuthenticated } from "../LogIn/apiLogin";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

// set type = 1 for create form and 0 for edit form
// must sent default values for data prop
const NewSessionForm = (props) => {
  const classes = useStyles();

  const { user } = isAuthenticated();
  const { type, data, wemeetId, history } = props;
  const [isProcessing, setIsProcessing] = useState(false);
  const { name, description, sessionDateTime, duration } = data;
  const [formVisibility, setFormVisibility] = useState(false);
  const s = new Date(sessionDateTime);
  const [formValues, setFormValues] = useState({
    hostId: user._id,
    wemeetId: wemeetId,
    name: name,
    description: description,
    sessionDateTime: s.toJSON().substr(0, 16),
    duration: duration,
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsProcessing(true);
    if (Number(type)) {
      createSession(formValues)
        .then((data) => {
          alert("Session created");
          setIsProcessing(false);
          history.go(0);
          setFormVisibility(false);
        })
        .catch(console.log);
    } else {
      updateSession(formValues, data._id)
        .then((data) => {
          alert("Session updated");
          setIsProcessing(false);
          history.go(0);
          setFormVisibility(false);
        })
        .catch(console.log);
    }
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
                <h3 className={classes.title}>
                  {Number(type) ? `CREATE NEW SESSION` : `EDIT DEATILS`}
                </h3>
                <Close
                  style={{ cursor: "pointer" }}
                  onClick={() => setFormVisibility(false)}
                />
              </div>
              <div>
                <TextField
                  required
                  name="name"
                  onChange={handleChange}
                  className={classes.textfield}
                  id="outlined-basic"
                  label="Session Title"
                  placeholder="Please add a clear name for session."
                  defaultValue={name}
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
                  defaultValue={description}
                  variant="outlined"
                />
                <TextField
                  required
                  name="sessionDateTime"
                  onChange={handleChange}
                  className={classes.datetime}
                  label="Start date and time"
                  type="datetime-local"
                  defaultValue={s.toJSON().substr(0, 16)}
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
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isProcessing}
                >
                  {isProcessing
                    ? "PROCESSING..."
                    : Number(type)
                    ? `CREATE NEW SESSION`
                    : `SAVE DEATILS`}
                </Button>
              </div>
            </form>
          </ThemeProvider>
        </div>
      ) : null}
    </>
  );
};

export default withRouter(NewSessionForm);
