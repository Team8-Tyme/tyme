import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  
}));

export default function CreateTask() {
  const classes = useStyles();

  return (
    <Paper>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <Grid container spacing={3}>
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Task Title"
              margin="normal"
            />
          </Grid>
          <Grid>
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Task Title"
              margin="normal"
            />
          </Grid>
        </div>
      </form>
    </Paper>
  );
}