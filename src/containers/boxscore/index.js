import { connect } from 'react-redux';
import { fetchBoxScore } from '../../actions/boxscore';
import BoxScore from '../../components/boxscore/';

const mapStateToProps = (state) => {
    return { BoxScore: state.BoxScore }
  };
  
  const mapDispatchToProps = dispatch => ({
    onComponentDidMount(leagueId, weekId, teamId) { dispatch(fetchBoxScore(leagueId, weekId, teamId))}
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoxScore)