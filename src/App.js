import React, { Component } from 'react';
import './App.css';
import ResyForm from './ResyForm.js';
import ResyContainer from './ResyContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => error);
  };

  addRes = newRes => {
    const { reservations } = this.state;
    this.setState({ reservations: [...reservations, newRes] });
  };

  cancelRes = id => {
    const { reservations } = this.state;
    const filteredRes = reservations.filter(res => res.id !== id);
    this.setState({ reservations: filteredRes });
  };

  render() {
    return (
      <div className="App">
        <h1 className="app-title">Turing Cafe Reservations</h1>
        <ResyForm addRes={this.addRes} />
        <ResyContainer
          data={this.state.reservations}
          cancelRes={this.cancelRes}
        />
      </div>
    );
  }
}

export default App;
