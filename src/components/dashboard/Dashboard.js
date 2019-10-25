import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import firebase from "firebase/app";


import Notification from '../notification/Notification'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '200px',
  },
}));

const Dashboard = ({ projects, auth, notifications })  => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
            blah blah blah
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
      <div>
        <div>NOTIFICATION:</div>
        <Notification notifications={notifications} />
      </div>
    </div>
  );
}


export default compose(
  connect(({firebase: { auth }}) => ({
      auth: auth
  })),
  firestoreConnect((state) => ([
    { collection: 'users', doc: state.auth.uid }
  ])),
  connect(({firestore: {ordered}}) => {
    return (!!ordered.users) ? {
      // projects: ordered.users.projects,
      notifications: ordered.users[0].notifications
    } : {}
  })
)(Dashboard)