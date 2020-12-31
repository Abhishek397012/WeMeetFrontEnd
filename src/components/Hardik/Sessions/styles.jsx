import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#13121A",
    overflow: "auto",
    maxHeight: "calc(100vh - 70px)",
    minHeight: "calc(100vh - 70px)",
    padding: "10px 30px",
  },
  page: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    color: "#BCBAC4",
    fontWeight: "bold",
    fontSize: "2em",
    marginTop: "2em",
    marginBottom: "0.4em",
    display: "flex",
    justifyContent: "space-between",
  },
  cardlist: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
    margin: "10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
}));
