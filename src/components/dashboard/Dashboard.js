import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import firebase from "firebase/app";

import createTask from "../tasks/CreateTask";
import { NavLink } from "react-router-dom";

import Notification from "../notification/Notification";
import TaskList from "../tasks/TaskList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "200px"
  }
}));

const Dashboard = ({ tasks, auth, notifications }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">TASKS</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Do</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Decide</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>Delegate</Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TaskList tasks={tasks} />
          </Grid>
        </Grid>
      </Paper>
      <br></br>
      <Paper>
        <Typography variant="h4">Notifications</Typography>
        <Notification notifications={notifications} />
      </Paper>
    </div>
  );
};

export default compose(
  connect(({ firebase: { auth } }) => ({
    auth: auth
  })),
  firestoreConnect(state => [
    { collection: "users", doc: state.auth.uid },
    { collection: "task"},
  ]),
  connect(({ firestore: { ordered } }) => {
    return !!ordered.users
      ? {
          tasks: ordered.task,
          notifications: ordered.users[0].notifications
        }
      : {};
  })
)(Dashboard);