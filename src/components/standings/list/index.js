import React, { Component } from 'react';
import team  from '../team';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './style.css';
import Team from '../team';

class StandingsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className= 'standings'>
            { this.props.Standings.divisions.map(league => (
                <Grid fluid className="league" key={league.metadata.division}>
                    <h2 className="name">{league.metadata.division} DIVISION </h2>
                    { league.teams.map(team => {
                        return <Team data={team} key={league.metadata.division + team.teamId}/>
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

StandingsList.propTypes = {
    Matchups: PropTypes.object,
    onComponentDidMount: PropTypes.func.isRequired
}
export default StandingsList;