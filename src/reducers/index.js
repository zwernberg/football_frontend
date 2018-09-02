import { combineReducers } from 'redux';

import Matchups from './matchups';
import Standings from './standings';

export default combineReducers({
    Matchups,
    Standings
})