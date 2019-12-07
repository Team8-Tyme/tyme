import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { signInWithGoogle } from "../../store/actions/authActions";
import { NavLink } from "react-router-dom";
import { loginPageStyle } from "../../styles/components/auth/loginPageStyle";

// Material Ui Components
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import GoogleButton from "react-google-button";

const LogIn = () => {
  const classes = loginPageStyle();
  const [email, setEmail] = useState("");
  const [pword, setPassword] = useState("");
  const dispatch = useDispatch();
  const auth = useSelector(state => state.firebase.auth);
  const authError = useSelector(state => state.auth.authError);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signIn(email, pword));
  };

  const googleLogIn = e => {
    dispatch(signInWithGoogle());
  }; 
 
  if (auth.uid) return <Redirect to="/dashboard" />;
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log In
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={email}
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            value={pword}
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handlePasswordChange}
          />
          <Typography className={classes.authError} component='h1' variant='h5'>
            {authError}
          </Typography>
          
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Log In
          </Button>
          <GoogleButton
            className={classes.googleButton}
            onClick={googleLogIn}
          />
          <Grid container justify='center'>
            <Grid item className={classes.toSignUp}>
              <NavLink to='/signup'>
                Don't have an account yet? Sign Up →
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default LogIn;
