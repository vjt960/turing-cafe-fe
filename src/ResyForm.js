import React, { Component } from 'react';
import './ResyForm.css';

class ResyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: '',
      id: ''
    };
  }

  handleChange = event => {
    event.preventDefault();
    const { title, value } = event.target;
    this.setState({ [title]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ id: Date.now() });
    const ticket = this.state;
    this.props.addRes(ticket);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      guests: '',
      id: ''
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          title="name"
          value={this.state.name}
          onChange={event => this.handleChange(event)}
          placeholder="Name"
        />
        <input
          type="text"
          title="date"
          value={this.state.date}
          onChange={event => this.handleChange(event)}
          placeholder="Date"
        />
        <input
          type="text"
          title="time"
          value={this.state.time}
          onChange={event => this.handleChange(event)}
          placeholder="Time"
        />
        <input
          type="text"
          title="guests"
          value={this.state.guests}
          onChange={event => this.handleChange(event)}
          placeholder="Number of guests"
        />
        <input
          type="submit"
          onClick={event => this.handleSubmit(event)}
          value="Make Reservation"
        />
      </form>
    );
  }
}

export default ResyForm;
