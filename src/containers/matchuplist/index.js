import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMatchups } from '../../actions/matchups';
import MatchupList from '../../components/matchupList';

const mapStateToProps = (state) => {
    return { Matchups: state.Matchups }
  };
  
  const mapDispatchToProps = dispatch => ({
    onComponentDidMount() { dispatch(fetchMatchups())}
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MatchupList)