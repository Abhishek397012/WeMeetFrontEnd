import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  root: {
    height: "80vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "10px",
  },
  button: {
    marginLeft: "5px",
  },
}));
