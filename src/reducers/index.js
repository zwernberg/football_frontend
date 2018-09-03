import { combineReducers } from 'redux';

import Matchups from './matchups';
import Standings from './standings';
import Chat from './chat';

export default combineReducers({
    Matchups,
    Standings,
    Chat
})