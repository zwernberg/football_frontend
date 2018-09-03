import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'

import Button from 'react-bootstrap/lib/Button';


import MatchupList from '../../containers/matchuplist';
import Standings from '../../containers/standings';

import ChatBox from '../chat/box';
import Navigation from '../navbar';

import './style.css';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <div className="App-intro">
            <ChatBox />
            <Route exact path="/" component={MatchupList} />
            <Route exact path="/standings" component={Standings} />
        </div>
      </div>
    );
  }
}

export default App;
