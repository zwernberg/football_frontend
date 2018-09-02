import { connect } from 'react-redux';
import { fetchMatchups, fetchStandings } from '../../actions/standings';
import StandingsList from '../../components/standings/list';

const mapStateToProps = (state) => {
    return { Standings: state.Standings }
  };
  
  const mapDispatchToProps = dispatch => ({
    onComponentDidMount() { dispatch(fetchStandings())}
  });


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StandingsList)