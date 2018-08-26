import React, { Component } from 'react';
import './style.css';
import Team from '../team';
import { Row, Col } from 'react-flexbox-grid';

class Matchup extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <Row className= "matchup">
                <Team data={this.props.matchup.teams[0]} />
                <Team data={this.props.matchup.teams[1]} />
            </Row>
        );
    }
}


export default Matchup;