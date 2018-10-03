import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux'

import './style.css';

function sendSocketMessage(user, message) {
    return {
        type : "SEND_WEBSOCKET_MESSAGE",
        payload : {
            'type': 'SEND_MESSAGE',
            user,
            message
        }
    }
}

class AddMessage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            message: ''
        }
      }
    onClick = (evt) => {
        this.props.dispatch(sendSocketMessage(this.state.user, this.state.message));
        this.setState({
            message: ''
        })
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <Grid fluid className= "add-message">
                <Row>
                    <Col xs={12} md={4}>
                    <input type="text" className="form-control" id="name" name='user' placeholder="NAME" value={this.state.user} onChange={e => this.handleChange(e)}></input>
                    </Col>
                    <Col xs={12} md={6}>
                    <input type="text" className="form-control" id="message" name="message" placeholder="MESSAGE" value={this.state.message} onChange={e => this.handleChange(e)}></input>
                    </Col>
                    <Col xs={12} md={2}>
                    <Button bsStyle="primary" onClick={(e) => this.onClick(e)} block>SUBMIT</Button>
                    </Col>
                </Row>
            </Grid>
        );
    }
}


export default connect()(AddMessage);