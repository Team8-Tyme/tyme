import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Paper } from "@material-ui/core";
import TaskSummary from "./TaskSummary";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "10vh"
  }
}));

const TaskList = ({ tasks }) => {
  const classes = useStyles();
  return (
    <div>
      <Typography>Backlog</Typography>
      {tasks &&
        tasks.map(task => {
          return <TaskSummary task={task}></TaskSummary>;
        })}
    </div>
  );
};

export default TaskList;
