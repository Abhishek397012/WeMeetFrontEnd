import { useHistory } from "react-router-dom";

import { isAuthenticated } from "../LogIn/apiLogin";

import Button from "@material-ui/core/Button";
import ReplayIcon from "@material-ui/icons/Replay";
import { useStyles } from "./styles";

const ErrorAccessDenied = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user } = isAuthenticated();

  return (
    <div className={classes.root}>
      <h2>Error 404: Not Found</h2>
      <h3>
        {user
          ? "Try reloading"
          : "Make sure that you're logged in or try reloading"}
      </h3>
      <div className={classes.buttonGroup}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/")}
          className={classes.button}
        >
          <ReplayIcon style={{ marginRight: "5px" }} />
          Reload
        </Button>
      </div>
    </div>
  );
};

export default ErrorAccessDenied;
