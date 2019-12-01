import React from "react";
import { Link } from "react-router-dom";
import { Typography, TextField, Paper } from "@material-ui/core";
import TaskSummary from "./TaskSummary";
//
const TaskList = ({ projects }) => {
  return (
    <div className="task-list">
      <TaskSummary/>
      <TaskSummary/>
    </div>
  );
};

export default TaskList;
