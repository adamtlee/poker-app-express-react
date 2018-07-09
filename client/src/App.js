import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {players: []}

  componentDidMount() {
    fetch('/players')
      .then(res => res.json())
      .then(players => this.setState({ players }));
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Players</h1>
        {this.state.players.map(player =>
          <div key={player.id}>
            <ul>
              {player.firstName}
              {player.lastName}
              {player.winning}
              {player.country}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;
