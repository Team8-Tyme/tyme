import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles({
  card: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// date wrapped in card 
 const DateCard = ({dateName, dateNumber}) => {
  const classes = useStyles();
  return (
    <GridListTile>
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h5">
          {dateName}
        </Typography>
        <Typography variant="h2" component="h2">
          {dateNumber}
        </Typography>
      </CardContent>
    </Card>
    </GridListTile>
  );
}

export default DateCard