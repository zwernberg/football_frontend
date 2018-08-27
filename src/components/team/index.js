import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Helmet from '../helmet';
import './style.css';

class Team extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <Col xs={12} md={4} className= "team">
                <Grid fluid>
                    <Row className="top">
                        <Col xs={2} md={2}> <Helmet /> </Col>
                        <Col xs={10} md={10} className="name">{ this.props.data.team.teamLocation }{' '}{ this.props.data.team.teamNickname }  </Col>
                    </Row>
                    <Row className="bottom">
                        <Col xs={6} md={6} className="total">Total</Col>
                        <Col xs={6} md={6} className="points"><div className="points">{ this.props.data.score } </div></Col>
                    </Row>
                </Grid>
            </Col>
        );
    }
}

export default Team;