import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import { Paper, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
export default class HabitStreaks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let habits = JSON.parse(window.localStorage.getItem("habits"));
    let habit = habits.filter(
      item => item.id === parseInt(this.props.match.params.id)
    )[0];

    let habitDays = habit.days;
    let dayGrids = [];
    for (let i = 0; i < 365; i++) {
      let dayGridDate = moment()
        .subtract(i, "days")
        .format("YYYY-MM-D");
      if (dayGridDate.toString() === habitDays[habitDays.length - 1]) {
        dayGrids.unshift(<div className="day day--active" key={i} />);
        habitDays.splice(habitDays.length - 1, 1);
      } else {
        dayGrids.unshift(<div className="day" key={i} />);
      }
    }

    return (
      <Paper className="habitGraph">
        <Typography>{habit.name}</Typography>
        <Typography>Last 365 Days</Typography>
        <div className="days">{dayGrids}</div>

        <Button>
          <Link to="/dashboard">Close</Link>
        </Button>
      </Paper>
    );
  }
}
