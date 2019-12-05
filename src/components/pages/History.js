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
import moment from "moment";
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


const History = ({createdAt, taskDetail, taskTitle}) => {
  const classes = useStyles();
  var userID = firebase.firestore().collection('task').doc().id;
  var db = firebase.database();
  return(
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          History < br />< br /> 
          { "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" } Completed: < br /> 
          { "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" } 
        </Typography> 
          <Typography variant="h5" component="p">
          { "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" } Created At: { createdAt } < br />
          { "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" } Task Detail: { taskDetail } < br />
          { "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" } Task Title: { taskTitle }
          </Typography>
      </Paper>
    </div>
  );
}

export default compose(
  connect(({firebase: { firestore }}) => ({
      firestore: firestore
  })),
  firestoreConnect((state) => ([
    { collection: 'task', doc: state.firestore.collection.id }
  ])),
  connect(({firestore: {ordered}}) => {
    return !!ordered.task
      ? {
          // projects: ordered.users.projects,
          createdAt: moment(ordered.task[1].createdAt.toDate()).format(
            "MMMM Do YYYY, h:mm:ss a"
          ),
          taskDetail: ordered.task[0].taskDetail,
          taskTitle: ordered.task[0].taskTitle
        }
      : {};
  })
)(History)