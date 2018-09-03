import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import ChatList from '../../../containers/chat/list';
import AddMessage from '../../../containers/chat/addMessage';

import './style.css';



class ChatBox extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Grid className="chatBox center-block">
        <Row>
          <ChatList />
        </Row>
        <Row>
          <AddMessage />
        </Row>
      </Grid>
    );
  }
}

export default ChatBox;
