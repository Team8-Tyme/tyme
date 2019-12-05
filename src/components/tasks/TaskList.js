import React from "react";
import { Typography } from "@material-ui/core";
import TaskSummary from "./TaskSummary";

const TaskList = ({ tasks }) => {
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