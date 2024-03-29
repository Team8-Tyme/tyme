import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { createTask } from "../../store/actions/taskActions";
import { withRouter } from "react-router-dom";

// Material Ui Components
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: "55px",
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

const CreateTask = props => {
  const classes = useStyles();
  const [taskTitle, setTitle] = useState("");
  const [taskDetail, setDetail] = useState("");
  const dispatch = useDispatch();
  
  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleDetailChange = e => {
    setDetail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(taskTitle, taskDetail);
    dispatch(createTask(taskTitle, taskDetail));
    props.history.push("/dashboard");
  };

  return (
    <Paper component="main" maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <label>Enter Task</label>
          <TextField
            rows={2}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={taskTitle}
            id="taskTitle"
            label="Task Title"
            name="taskTitle"
            autoComplete="taskTitle"
            autoFocus
            onChange={handleTitleChange}
          />
          <TextField
            multiline={true}
            rows={6}
            rowsMax={5}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={taskDetail}
            name="Task Detail"
            label="Task Detail"
            type="text"
            id="task-detail"
            onChange={handleDetailChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add Task
          </Button>
        </form>
      </div>
    </Paper>
  );
};

export default withRouter(CreateTask);

