import React from "react";

import { useStyles } from "./styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const WithSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default WithSpinner;
