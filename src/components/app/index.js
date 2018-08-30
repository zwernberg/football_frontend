import React, { Component } from 'react';
import MatchupList from '../matchupList';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
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
