import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { saveHabit } from "../../store/actions/habitActions";
import { Button, Paper, TextField, Typography } from "@material-ui/core";

class AddHabitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: ""
    };
  }

  goBack = () => {
    this.props.history.goBack();
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSaveHabit = () => {
    this.props.saveHabit({
      name: this.state.name,
      startDate: moment().format("YYYY-MM-D"),
      days: [moment().format("YYYY-MM-D")]
    });
    this.props.history.push("/habit-list");
  };

  render() {
    return (
      <Paper>
        <form>
          <Typography>Enter Habit</Typography>
          <TextField
            rows={2}
            variant="outlined"
            margin="normal"
            required
            type="text"
            className="input"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Button>
            <Link onClick={this.goBack} to={window.location.hash}>
              Close
            </Link>
          </Button>
          <Button onClick={this.handleSaveHabit}>Add Habit</Button>
        </form>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  saveHabit: data => dispatch(saveHabit(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddHabitForm);
