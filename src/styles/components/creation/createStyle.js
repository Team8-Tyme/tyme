import { makeStyles } from "@material-ui/core/styles";

export const createStyle = makeStyles(theme => ({
  paper: {
    marginTop: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#FFC107"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: ""
    }
  }
}));