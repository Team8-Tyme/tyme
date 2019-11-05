import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { Paper, Box } from "@material-ui/core";
import Image from "../../imgs/tyme.png";
import Grid from "@material-ui/core/Grid";
import { sizing } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: "purple"
  },
  root: {
    flexGrow: 1,
    backgroundImage: `url({Image})`
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  buttons: {
    color: "#FFC107"
  },

  paper: {
    padding: theme.spacing(0),
    height: "94vh",
    textAlign: "center",
    backgroundColor: "#FFC107"
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
            <Button color='inherit' className={classes.buttons}>
              {" "}
              Log In{" "}
            </Button>
          </NavLink>
          <NavLink to='/signup'>
            <Button color='inherit' className={classes.buttons}>
              {" "}
              Sign Up{" "}
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Paper style={{ backgroundColor: "black" }}>
        {/* <img src={Image} style={{width:"100%"}}/> */}
      </Paper>

      <Grid height='100%' container spacing={3}>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h2'>Do you not have enough time?</Typography>
            <Typography padding="40px" variant="h4">tyme is a web app that helps you track your tasks and develop habits</Typography>
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
