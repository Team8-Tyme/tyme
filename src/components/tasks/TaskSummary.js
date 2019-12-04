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

export default function TaskSummary({ task }) {
  const classes = useStyles();

  return (
    <Paper elevation={1}>
      <Typography variant="h5" component="h3">
        {task.taskTitle}
      </Typography>
      <Typography component="p">{task.taskDetail}</Typography>
      </Paper>
  );
}
