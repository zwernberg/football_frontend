import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './style.css';
import Message from '../message';

class ChatList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Grid className= 'messageList'>
            { this.props.Chat.Messages.map(message => (
                    <Message data={message}/>
              ))}
            </Grid>
        );
    }

    componentDidMount() {
        setTimeout(this.props.onComponentDidMount, 5000);
        //this.props.onComponentDidMount();
    }
}

ChatList.propTypes = {
    Messages: PropTypes.object,
    onComponentDidMount: PropTypes.func.isRequired
}
export default ChatList;