import React, { Component } from 'react';
import Matchup  from '../matchup';
import { Grid } from 'react-flexbox-grid';

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
                    <div> {league.metadata.division}</div>
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