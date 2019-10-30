import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { Paper } from "@material-ui/core";
import Image from "../../imgs/tyme.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  Paper: {
    color:"black"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: "black" }}>
        <Toolbar>  
          <Typography variant='h6' className={classes.title}>
            tyme
          </Typography>
          <NavLink to='/login'>
            <Button color='inherit'> Log In </Button>
          </NavLink>
          <NavLink to='/signup'>
            <Button color='inherit'> Sign Up </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Paper style={{ backgroundColor: "black" }}>
        <img src={Image}/>
      </Paper>
    </div>
  );
}
