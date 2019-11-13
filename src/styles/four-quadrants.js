import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { palette } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  paper: {
    display: "grid",
    gridTemplateColumns: "3rem 250px 250px 3rem",
    gridTemplateRows: "3rem 250px 250px 3rem",
    gridGap: "1rem",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"purple"
  },
  top: {
    gridRow: "1 / 2",
    gridColumn: "1 / 5"
  },
  bottom: {
    gridRow: "4 / 5",
    gridColumn: "1 / 5"
  },
  left: {
    gridRow: "2 / 4",
    gridColumn: "1 / 2"
  },
  right: {
    gridRow: "2 / 4",
    gridColumn: "4 / 5"
  },
  card: {
    width: "100%",
    height: "100%"
  }
});

function MyCard({ title }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>{title}</Typography>
      </CardContent>
    </Card>
  );
}

function MyCardButton({ title }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography>{<Button>{title}</Button>}</Typography>
      </CardContent>
    </Card>
  );
}

function Quadrants() {
  return (
    <React.Fragment>
      <MyCard title="Do" />
      <MyCard title="Decide" />
      <MyCard title="Delegate" />
      <NavLink to='/create'><MyCardButton title="Backlog +" /> </NavLink>
    
    </React.Fragment>
  );
}


const linker = (props) => {
return (
<ul className = "right">
  <li>NavLink to= '/</li>



</ul>

)
}

function FourQuadrants() {
  const classes = useStyles();

  return (
    
    <Paper className={classes.paper}>
     
      <Typography className={classes.top}></Typography>
      <Typography className={classes.bottom}></Typography>
      <Typography className={classes.left}></Typography>
      <Typography className={classes.right}></Typography>
      <Quadrants />
    </Paper>
   

  );
}








export default FourQuadrants;
