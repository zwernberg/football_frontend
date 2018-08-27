import Spritesheet from 'react-responsive-spritesheet';
import React, { Component } from 'react';
import sprite from './helmets.png'
class Helmet extends Component {
    constructor(props) {
        super(props);
      }
    randNum() {
        let num = Math.floor(Math.random() * 30);
        if (num === 6 || num == 26) {
            return Math.floor(Math.random() * 4)
        }
        return num;
    }
    render() {
        return (
            <Spritesheet
                className={`my-element__class--style`}
                image={sprite}
                widthFrame={64}
                heightFrame={64}
                startAt={this.randNum()}
                steps={1}
                fps={1}
                autoplay={false}
                loop={false}
                isResponsive={true}
            />
        );
    }
}

export default Helmet;