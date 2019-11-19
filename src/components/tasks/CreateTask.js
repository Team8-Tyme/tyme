import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginPageStyle } from "../../styles/components/auth/loginPageStyle";
import { createTask } from '../../store/actions/taskActions'
// Material Ui Components
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const CreateTask = () => {
  const classes = loginPageStyle();
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
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <AddCircleOutlineIcon />
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
    </Container>
  );
};

export default CreateTask;
