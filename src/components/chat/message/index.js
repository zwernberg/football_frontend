import React, { Component } from 'react';
import { Col, Row, Well} from 'react-bootstrap';
import Moment from 'react-moment';

import './style.css';

class ChatMessage extends Component {
    constructor(props) {
        super(props);
    }
    user() {
        return `${this.props.data.user}`
    }
    message() {
        return `${this.props.data.message}`
    }
    dateTime() {
        return <Moment className="messageDate" fromNow>{this.props.data.created}</Moment>;
    }
    render() {
        return (
            <Row className="message">
                <Col xs={12} md={3} className="messageName">{this.user()} ({this.dateTime()}):</Col>
                <Col xs={12} md={8} className="messageContent">{this.message()}</Col>
            </Row>
        );
    }
}

export default ChatMessage;