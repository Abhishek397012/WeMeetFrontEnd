import React, { useState, useEffect } from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import SummarySidebar from "../../Navneet Singh/WeMeetSummary/SummarySidebar";
import SearchBox from "./SearchBox";
import RegistrantsList from "./RegistrantsList";

import { useStyles } from "./styles";
import { getRegistrants } from "./apiRegistrants";
import { isAuthenticated } from "../../Hardik/LogIn/apiLogin";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const RegistrantsPage = (props) => {
  const classes = useStyles();
  const [registrants, setRegistrants] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const { user } = isAuthenticated();

  useEffect(() => {
    getRegistrants(user._id, props.match.params.wemeetId)
      .then((data) => {
        setRegistrants(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  const filteredRegistrants = registrants.filter((registrant) => {
    return registrant.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <ThemeProvider theme={theme}>
      <SummarySidebar id={props.match.params.wemeetId}>
        <div className={classes.root}>
          <h1 className={classes.header}>Registrants</h1>
          <div className={classes.page}>
            <SearchBox searchChange={onSearchChange} />
            <RegistrantsList registrants={filteredRegistrants} />
          </div>
        </div>
      </SummarySidebar>
    </ThemeProvider>
  );
};

export default RegistrantsPage;
