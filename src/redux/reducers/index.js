import {combineReducers} from 'redux';
import appStateProducer from './appState';
import playerProducer from './player';

const rootReducer = combineReducers({
  appState: appStateProducer,
  player: playerProducer,
});

export default rootReducer;
