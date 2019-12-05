import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 2),
    marginTop: "20px"
  },
  paper: {
    backgroundColor: "#7274792"
  },
  typography: {
    color: "red"
  }
}));

export default function TaskSummary({ task }) {
  const classes = useStyles();

  return (
    <Paper  className={classes.paper} elevation={1}>
      <Typography className={classes.typography} variant="h5" component="h3">
        {task.taskTitle}
      </Typography>
      <Typography component="p">{task.taskDetail}</Typography>
      </Paper>
  );
}
