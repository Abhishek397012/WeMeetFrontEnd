import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  popup: {
    position: "fixed",
    left: "0",
    top: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    margin: "auto",
    overflow: "auto",
    zIndex: "10",
  },
  form: {
    width: "500px",
    borderRadius: "10px",
    padding: "20px",
    backgroundColor: "#121212",
  },
  header: {
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  title: {
    padding: "0",
    margin: "0",
    fontSize: "20px",
  },
  subHeader: {
    color: "#fff",
    padding: "0",
    margin: "15px 0 0 5px",
    fontSize: "18px",
    display: "flex",
    justifyContent: "space-between",
  },
  textfield: {
    width: "100%",
    margin: "10px 5px 5px 0px",
  },
  datetime: {
    width: "48%",
    margin: "10px 5px 5px 4px",
  },
  submit: {
    margin: "30px 10px 10px 5px",
  },
}));
