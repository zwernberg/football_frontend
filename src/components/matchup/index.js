import React, { Component } from 'react';
import './style.css';

class Matchup extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className= "matchup">
                { this.props.matchup.teams[0].team.teamNickname } { this.props.matchup.teams[0].score } vs  { this.props.matchup.teams[1].score } { this.props.matchup.teams[1].team.teamNickname }
            </div>
        );
    }
}


export default Matchup;