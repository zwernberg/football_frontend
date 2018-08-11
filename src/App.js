import React, { Component } from 'react';
import { DataSource } from './dataSource';
import logo from './logo.svg';
import List from './components/list';
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
        <p className="App-intro">
          <List data={DataSource} />
        </p>
      </div>
    );
  }
}

export default App;
