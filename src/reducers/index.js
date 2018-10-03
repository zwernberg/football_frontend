import { combineReducers } from 'redux';

import Matchups from './matchups';
import Standings from './standings';
import Chat from './chat';
import BoxScore from './boxscore';

export default combineReducers({
    Matchups,
    Standings,
    Chat,
    BoxScore,
})