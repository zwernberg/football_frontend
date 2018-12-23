import React, { Component } from 'react';
import Team from '../team';
import BoxScore from '../boxscore';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Championship extends Component {
    constructor(props) {
        super(props);

        this.state = {
          alex: null,
          neal: null,
        }
      }
    componentDidMount() {
      fetch('https://schumacher.football/api/scoreboard')
      .then(result => result.json())
      .then((champ) => {
        this.setState({
          neal: champ.divisions[1].scoreboard.matchups[0].teams[0],
          alex: champ.divisions[0].scoreboard.matchups[0].teams[1],
        })
      })
    }
    render() {
        const {alex, neal} = this.state;
        const boxScore = {
          data: {
            teams: [
              alex,
              neal
            ]
          }
        }
        if (!alex) { 
          return '';
        }
        return (
            <Row className= "matchup">
                <Team data={alex} />
                <Team data={neal} />
                {/* <BoxScore 
                  BoxScore = {boxScore}
                /> */}
            </Row>
        );
    }
}


export default Championship;