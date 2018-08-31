import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import MatchupList from '../../containers/matchuplist';
import Test from '../../components/test';

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
            <Route exact path="/" component={MatchupList} />
        </div>
      </div>
    );
  }
}

export default App;
