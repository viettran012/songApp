import {combineReducers} from 'redux';
import appStateProducer from './appState';
import playerProducer from './player';
import userProducer from './user';

const rootReducer = combineReducers({
  appState: appStateProducer,
  player: playerProducer,
  user: userProducer,
});

export default rootReducer;
