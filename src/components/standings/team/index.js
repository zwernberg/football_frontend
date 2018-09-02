import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import './style.css';

class Team extends Component {
    constructor(props) {
        super(props);
      }
    name() {
        return `${this.props.data.teamLocation} ${this.props.data.teamNickname}`.toString().toUpperCase();
    }
    owner() {
        return `${this.props.data.owner}`.toString().toUpperCase();
    }
    rank () {
        return `${this.props.data.overallStanding}`;
    }
    record (){
        return `${this.props.data.record.overallWins} - ${this.props.data.record.overallLosses}`;
    }
    render() {
        return (
                    <Row className="standing-row">
                        <Col xs={1} md={1} className="rank"> {this.rank()} </Col>
                        <Col xs={11} md={8} className="standing-name">{this.name()} ({this.owner()})</Col>
                        <Col xs={11} xsOffset={1} md={2} className="record">{this.record()}</Col>
                    </Row>
        );
    }
}

export default Team;