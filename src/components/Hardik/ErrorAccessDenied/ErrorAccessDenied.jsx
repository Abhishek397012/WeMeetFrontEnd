import React from "react";

import { useStyles } from "./styles";

const ErrorAccessDenied = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2>Error 404: Not Found</h2>
      <h3>Please check if you're logged in or not, or try reloading.</h3>
    </div>
  );
};

export default ErrorAccessDenied;
