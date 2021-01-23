import { useParams } from "react-router-dom";

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

const SessionsPage = (props) => {
  const classes = useStyles();
  const { wemeetId } = useParams();
  const s = new Date();
  const defaultValues = {
    name: "",
    description: "",
    sessionDateTime: s.toJSON().substr(0, 16),
    duration: 0,
  };

  return (
    <ThemeProvider theme={theme}>
      <SummarySidebar id={wemeetId}>
        <div className={classes.root}>
          <h1 className={classes.header}>
            Sessions
            <NewSessionForm type={1} data={defaultValues} wemeetId={wemeetId} />
          </h1>
          <div className={classes.page}>
            <SessionsList wemeetId={wemeetId} />
          </div>
        </div>
      </SummarySidebar>
    </ThemeProvider>
  );
};

export default SessionsPage;
