import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { firebaseConnect } from 'react-redux-firebase'
import { firebase } from 'react-redux-firebase'

firebaseConnect(props => [
  { collection : "task", doc: props.match.params.id }
])

function writeTaskData(taskDetail) {
  firebase.database().ref('task/').set({
    taskDetail
  });
}


const useStyles = makeStyles({
  card: {
    Width: 500
  },

  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function TaskDetail() {
  const classes = useStyles();
  

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Task Title
        </Typography>

        <Typography variant="body2" component="p" className={classes.detail}>
         
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
  );
}
