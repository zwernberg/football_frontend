import React, { Component } from 'react';
import Matchup  from '../matchup';
import { Grid } from 'react-flexbox-grid';
import './style.css';

class MatchupList extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          leagues: [],
        };
      }
    render() {
        const { leagues } = this.state;
        return (
            <div className= 'matchupList'>
            { leagues.map(league => (
                <Grid fluid className="league">
                    <h2 className="name"> Division: {league.metadata.division}</h2>
                    { league.scoreboard.matchups.map(matchup => {
                        return <Matchup matchup={matchup} />
                    })}
                </Grid>
              ))}
            </div>
        );
    }

    componentDidMount() {
        fetch('https://schumacher.football/api/scoreboard')
        .then(response => response.json())
        .then(data => this.setState({leagues: data.divisions}));
    }
}


export default MatchupList;