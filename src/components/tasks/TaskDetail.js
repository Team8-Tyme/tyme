import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'

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
          Task Detail
        </Typography>
      </CardContent>
      <CardActions>
     
      </CardActions>
    </Card>
  );
}
