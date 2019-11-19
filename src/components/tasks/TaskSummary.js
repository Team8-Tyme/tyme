import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 2),
    marginTop: "20px"
  }
}));

export default function TaskSummary() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
       Task Title
      </Typography>
      <Typography component="p">
        Posted by You
      </Typography>
    </Paper>
  );
}
