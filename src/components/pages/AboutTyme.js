import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { Paper, Box } from "@material-ui/core";
import clock from "../../imgs/clock.svg";
import checklist from "../../imgs/checklist.svg"
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  body: {
    backgroundColor: "black"
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
    padding: "50px",
    height: "94vh",
    textAlign: "center",
    backgroundColor: "#FFC107"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const auth = useSelector(state => state.firebase.auth);
  const authError = useSelector(state => state.auth.authError);

  if (auth.uid) return <Redirect to="/dashboard" />;
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

      <Grid height='100%' container spacing={3}>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <Typography variant='h2'>Do you not have enough time?</Typography>
            <img src={clock} style={{ width: "50%", padding: "10px" }} />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>
            <Typography variant='h2'>
              tyme is a web app that helps track your tasks and develop habits
            </Typography>
            <img src={checklist} style={{ width: "50%", marginTop:"10px" }} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
