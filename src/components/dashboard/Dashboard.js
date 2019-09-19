import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '200px',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const auth = useSelector(state => state.firebase.auth);
  if (!auth.uid) return <Redirect to='/login'/> 
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}