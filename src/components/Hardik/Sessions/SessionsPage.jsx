import React from "react";

import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import NewSessionForm from "../NewSessionForm/NewSessionForm";
import SummarySidebar from "../../Navneet Singh/WeMeetSummary/SummarySidebar";
import SessionsList from "./SessionsList";

import { useStyles } from "./styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const SessionsPage = () => {
  const classes = useStyles();
  const s = new Date();
  const defaultValues = {
    title: "",
    summary: "",
    datetime: s.toJSON().substr(0, 16),
    duration: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <SummarySidebar id="12345">
        <div className={classes.root}>
          <h1 className={classes.header}>
            Sessions
            <NewSessionForm type={1} data={defaultValues} />
          </h1>
          <div className={classes.page}>
            <SessionsList />
          </div>
        </div>
      </SummarySidebar>
    </ThemeProvider>
  );
};

export default SessionsPage;