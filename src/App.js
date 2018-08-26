import React, { Component } from 'react';
import { DataSource } from './dataSource';
import logo from './logo.svg';
import MatchupList from './components/matchupList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <MatchupList data={DataSource} />
        </div>
      </div>
    );
  }
}

export default App;
