import React, { Component } from 'react';
import './style.css';
import Team from '../team';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Matchup extends Component {
    constructor(props) {
        super(props);
      }
    buildLink() {
        return `boxscore/${this.props.metadata.leagueId}/${this.props.matchupPeriodId}/${this.props.matchup.teams[0].teamId}`
    }
    render() {
        return (
            <Row className= "matchup" componentClass={Link} to={this.buildLink()} >
                <Team data={this.props.matchup.teams[0]} />
                <Team data={this.props.matchup.teams[1]} />
            </Row>
        );
    }
}


export default Matchup;