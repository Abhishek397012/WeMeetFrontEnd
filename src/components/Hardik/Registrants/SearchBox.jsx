import React from "react";

import TextField from "@material-ui/core/TextField";

import { useStyles } from "./styles";

const SearchBox = ({ searchChange }) => {
  const classes = useStyles();

  return (
    <TextField
      id="outlined-basic"
      label="Search"
      className={classes.searchbox}
      type="search"
      placeholder="Search Registrants"
      onChange={searchChange}
      variant="outlined"
    />
  );
};

export default SearchBox;
