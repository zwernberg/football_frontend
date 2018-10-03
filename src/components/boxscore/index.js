import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import PropTypes from 'prop-types'
import Roster from '../roster';

import './style.css';

class BoxScore extends Component {
    constructor(props) {
        super(props);
    }

    intervalCall() {
        this.props.onComponentDidMount(this.props.match.params.leagueId, this.props.match.params.weekId, this.props.match.params.teamId);
    }

    render() {
        if (!this.props.BoxScore.data) {
            return <div />
        }
        return (
            <div className= 'test'>
                <Grid>
                    <Roster data={this.props.BoxScore.data.teams[0]} />
                    <Roster data={this.props.BoxScore.data.teams[1]} />
                </Grid>

            </div>
        );
    }

    componentDidMount() {
        this.intervalCall();
        this.interval = setInterval(() => this.intervalCall(), 60 * 1000);
    }

    componentWillUnmount() {
        clearImmediate(this.interval);
    }
}

BoxScore.propTypes = {
    BoxScore: PropTypes.object,
    onComponentDidMount: PropTypes.func.isRequired
}
export default BoxScore;