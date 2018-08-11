import React, { Component } from 'react';
import Matchup  from '../matchup';

class List extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          matchups: [],
        };
      }
    render() {
        const { matchups } = this.state;
        return (
            <div className= 'list'>
            { matchups.map(matchup => (
                <Matchup matchup={matchup} />
              ))}
            </div>
        );
    }

    componentDidMount() {
        fetch('http://schumacher.football/api/week/1/')
        .then(response => response.json())
        .then(data => this.setState({matchups: data.leagues[0].scoreboard.matchups}));
    }
}


export default List;