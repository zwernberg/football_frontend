import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Helmet from '../helmet';
import './style.css';

class Player extends Component {
    constructor(props) {
        super(props);
    }
    name() {
        return `${this.props.player.firstName} ${this.props.player.lastName}`.toString().toUpperCase();
    }
    score() {
        return `${this.props.currentPeriodRealStats.appliedStatTotal || 0}`
    }
    position() {
        const roster_slots = {0:'QB',1: 'QB', 2:'RB',3:'WR', 4:'WR',5: 'WR/TE', 6:'TE',23:'FLEX',16:'D/ST',17:'K',20:'Bench'};
        return `${roster_slots[this.props.slotCategoryId]}`
    }
    render() {
        return (
            <Row>
                <Col xs={12} md={12} className="player">
                    <Grid fluid>
                        <Row>
                            <Col xs={4} md={4}>
                                {this.position()}
                            </Col>
                            <Col xs={6} md={6} className="player-name">
                                {this.name()}
                            </Col>

                            <Col xs={2} md={2}>
                                {this.score()}
                            </Col>
                        </Row>
                    </Grid>
                </Col>
            </Row>
        );
    }
}

export default Player;