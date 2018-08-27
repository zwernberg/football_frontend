import React, { Component } from 'react';
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
          {/* <img src={Header} className="header" alt="logo" /> */}
          <h1 className="App-title">Schumacher Football</h1>
        </header>
        <div className="App-intro">
          <MatchupList />
        </div>
      </div>
    );
  }
}

export default App;
