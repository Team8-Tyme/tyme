import { makeStyles } from "@material-ui/core/styles";

export const signupPageStyle = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "theme.palette.common.white"
    }
  },
  paper: {
    marginTop: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "red"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(2)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
    color: "white",
    "&:hover": {
      backgroundColor: "green"
    }
  }
}));
