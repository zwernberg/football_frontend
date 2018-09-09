import React, { Component } from 'react';
import { Grid, Col, Row} from 'react-bootstrap';

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
    record() {
        return `(${this.props.data.team.record.overallWins}-${this.props.data.team.record.overallLosses})`
    }
    render() {
        return (
            <Col xs={12} md={6} className= "team">
                <Grid fluid>
                    <Row>
                        <Col xs={2} md={2}> <Helmet /> </Col>
                        <Col xs={6} md={6} className="team-name tecmo-font">
                            <Row>
                                <Col xs={12} md={12}>{this.name()}</Col>
                                <Col className="body-copy-font" xs={12} md={12}>{this.record()} {this.owner()}</Col>
                            </Row>
                        </Col>
                        <Col xs={4} md={4}> <div className="tecmo-font"></div> 
                            <Row>
                                <Col className="points-header" xs={12} md={12}>SCORE</Col>
                                <Col className="points" xs={12} md={12}>{ this.props.data.score } </Col>
                            </Row>
                        </Col>
                        {/* <Col xs={10} md={10} className="team-name">{this.name()} ({this.owner()})</Col> */}
                    </Row>
                </Grid>
           </Col>
        );
    }
}

export default Team;