import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';

import './style.css';

class ChatMessage extends Component {
    constructor(props) {
        super(props);
    }
    name() {
        return `${this.props.data.name}`
    }
    message() {
        return `${this.props.data.message}`
    }
    render() {
        return (
            <Row>
                <Col xs={2} md={2} className="messageName">{this.name()}</Col>
                <Col xs={10} md={10} className="messageContent">{this.message()}</Col>
            </Row>
        );
    }
}

export default ChatMessage;