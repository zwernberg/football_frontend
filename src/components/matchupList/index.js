import React, { Component } from 'react';
import Matchup  from '../matchup';
import { Row, Col, Grid } from 'react-bootstrap';
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
                    <Row className="division-header">
                        <Col xs={0} md={3}></Col>
                        <Col xs={2} md={1}><img src={"./stars.png"} alt="tecmo stars"/></Col>                      
                        <Col xs={8} md={4}><h2 className="tecmo-underline">{league.metadata.division} DIVISION </h2></Col>
                        <Col xs={2} md={1}><img src={"./stars.png"} alt="tecmo stars"/></Col>
                        <Col xs={0} md={3}></Col>
                    </Row>
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