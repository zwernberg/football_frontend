import React, { Component, }  from 'react';
import ReactDOM from 'react-dom'
import { Grid } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './style.css';
import Message from '../message';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }
    render() {
        return (
            <Grid className= 'messageList' ref={(el) => { this.messagesContainer = el; }} >
                { this.props.Chat.Messages.map(message => (
                    <Message data={message} key={message.id}/>
              ))}
            </Grid>
        );
    }

    scrollToBottom = () => {
        const messagesContainer = ReactDOM.findDOMNode(this.messagesContainer);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };
      
    componentDidMount() {
        this.scrollToBottom();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }
}

ChatList.propTypes = {
    Messages: PropTypes.object,
    onComponentDidMount: PropTypes.func.isRequired
}
export default ChatList;