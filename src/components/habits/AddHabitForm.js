import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment";
import { saveHabit } from "../../store/actions/habitActions"
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { createStyle } from "../../styles/components/creation/createStyle";
import Grid from '@material-ui/core/Grid';
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSaveHabit = () => {
    this.props.saveHabit({
      name: this.state.name,
      startDate: moment().format("YYYY-MM-D"),
      days: [moment().format("YYYY-MM-D")]
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <Paper>
        <form>
          <div>
            <Typography>
              Enter Habit
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
            </Typography>
          </div>
          <div>
            <Button>
              <Link onClick={this.goBack} to={window.location.hash}>
                Close
              </Link>
            </Button>
            <Button onClick={this.handleSaveHabit}>Add Habit</Button>
          </div>
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
