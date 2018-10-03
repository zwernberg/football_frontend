import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Helmet from '../helmet';
import './style.css';

import Player from '../player';

class Roster extends Component {
    constructor(props) {
        super(props);
    }
    name() {
        return `${this.props.data.team.teamLocation} ${this.props.data.team.teamNickname}`.toString().toUpperCase();
    }
    starters() {
        return this.props.data.slots.filter((player) => player.slotCategoryId !== 20);
    }
    bench() {
        return this.props.data.slots.filter((player) => player.slotCategoryId === 20);

    }
    render() {
        return (
            <Col xs={12} md={6} className="team">
                <Grid fluid>
                    <Row>
                        <Col xs={2} md={2}> <Helmet /> </Col>
                        <Col xs={10} md={10} className="team-name tecmo-font">
                            <Row>
                                <Col xs={12} md={12}>{this.name()}</Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="points-header" xs={6} md={6}>Projected</Col>
                        <Col className="total" xs={6} md={6}>{this.props.data.appliedActiveProjectedTotal} </Col>
                    </Row>
                    <Row>
                        <Col className="points-header" xs={6} md={6}>SCORE</Col>
                        <Col className="total" xs={6} md={6}>{this.props.data.appliedActiveRealTotal} </Col>
                    </Row>
                    <Row className="players-header">STARTERS</Row>
                    {this.starters().map(player => (
                        <Player {...player} />
                    ))}
                    <Row className="players-header">BENCH</Row>

                    {this.bench().map(player => (
                        <Player {...player} />
                    ))}
                </Grid>
            </Col>
        );
    }
}

export default Roster;