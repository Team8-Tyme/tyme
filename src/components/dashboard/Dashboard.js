import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import FourQuadrants from '../../styles/four-quadrants'

import createTask from '../projects/CreateTask'
import { NavLink } from 'react-router-dom'




const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '200px',
  },
}));

const Dashboard = ({ projects, auth })  => {
  const classes = useStyles();
  return (
 
 <FourQuadrants />   
  );
}

const TaskModal = (props) => {
  return (
    <li><NavLink to= '/create'> New Task </NavLink> </li>
  )
}




export default compose(
    firestoreConnect([
    { collection: 'projects'},
    ]),
    connect((state, props) => ({
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects
    }))
)(Dashboard)