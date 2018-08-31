import React, { Component } from 'react';
import Matchup  from '../matchup';
import Grid from 'react-bootstrap/lib/Grid';
import PropTypes from 'prop-types'

import './style.css';

class MatchupList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className= 'matchupList'>
            { this.props.Matchups.divisions.map(league => (
                <Grid fluid className="league" key={league.metadata.division}>
                    <h2 className="name">{league.metadata.division} DIVISION </h2>
                    { league.scoreboard.matchups.map(matchup => {
                        return <Matchup matchup={matchup} key={league.metadata.division + matchup.teams[0].teamId}/>
                    })}
                </Grid>
              ))}
            </div>
        );
    }

    componentDidMount() {
        this.props.onComponentDidMount();
    }
}

MatchupList.propTypes = {
    Matchups: PropTypes.object,
    onComponentDidMount: PropTypes.func.isRequired
}
export default MatchupList;