import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Test extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
                test
                <Link to="/"><button>Back</button></Link>

            </div>
        );
    }
}

export default Test;