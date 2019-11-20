import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import FourQuadrants from "../../styles/four-quadrants";

import createTask from "../tasks/CreateTask";
import { NavLink } from "react-router-dom";

import Notification from "../notification/Notification";
import TaskList from "../tasks/TaskList";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: "200px"
  }
}));

const Dashboard = ({ tasks, auth, notifications }) => {
  const classes = useStyles();

  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default compose(
  connect(({ firebase: { auth } }) => ({
    auth: auth
  })),
  firestoreConnect(state => [
    { collection: "users", doc: state.auth.uid },
    { collection: "task" }
  ]),
  connect(({ firestore: { ordered } }) => {
    return !!ordered.users
      ? {
          tasks: ordered.task
          // notifications: ordered.users[0].notifications
        }
      : {};
  })
)(Dashboard);
