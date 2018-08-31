import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

import Row from 'react-bootstrap/lib/Row';
import Helmet from '../helmet';
import './style.css';

class Team extends Component {
    constructor(props) {
        super(props);
      }
    name() {
        return `${this.props.data.team.teamLocation} ${this.props.data.team.teamNickname}`.toString().toUpperCase();
    }
    owner() {
        return `${this.props.data.team.owner}`.toString().toUpperCase();
    }
    render() {
        return (
            <Col xs={12} md={6} className= "team">
                <Grid fluid>
                    <Row className="top">
                        <Col xs={2} md={2}> <Helmet /> </Col>
                        <Col xs={10} md={10} className="team-name">{this.name()} ({this.owner()})</Col>
                    </Row>
                    <Row className="bottom">
                        <Col xs={6} md={6} className="total">TOTAL</Col>
                        <Col xs={6} md={6} className="points"><div className="points">{ this.props.data.score } </div></Col>
                    </Row>
                </Grid>
           </Col>
        );
    }
}

export default Team;