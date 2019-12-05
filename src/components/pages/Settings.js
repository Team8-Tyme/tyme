import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect, firebaseConnect } from "react-redux-firebase";
import Notification from "../notification/Notification";


import firebase, { app } from "firebase/app";
import { getFirestore } from 'redux-firestore';
import { database } from "firebase/database";
import { firestore } from "firebase/firestore";
import { isAdmin } from '@firebase/util';
import { display } from '@material-ui/system';
import { userInfo } from 'os';



const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '200px',
  },
}));


const Settings = ({firstName, lastName}) => {
  const classes = useStyles();
  var userID = firebase.auth().currentUser.uid.toString();
  var db = firebase.database();
  return(
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          User Information < br />< br />
          Email: { firebase.auth().currentUser.email }
        </Typography> 
          <Typography variant="h5" component="p">
            First Name: { firstName } < br />
            Last Name: { lastName }
          </Typography>
      </Paper>
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
      firstName: ordered.users[0].firstName, 
      lastName: ordered.users[0].lastName
    } : {}
  })
)(Settings)
