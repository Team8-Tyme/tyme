import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Paper } from "@material-ui/core";
import TaskSummary from "./TaskSummary";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10vh"
  }
}));

const TaskList = ({ tasks }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography>Task </Typography>
      {tasks &&
        tasks.map(task => {
          return <TaskSummary task={task}></TaskSummary>;
        })}
    </Paper>
  );
};

export default TaskList;
