import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { requestMessages } from '../../../actions/chat';
import ChatList from '../../../components/chat/list';

const mapStateToProps = (state) => {
    return { Chat: state.Chat }
  };
  
  const mapDispatchToProps = dispatch => ({
    onComponentDidMount() { dispatch(requestMessages())}
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatList)