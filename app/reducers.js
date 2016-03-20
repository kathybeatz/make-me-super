import { RECEIVE_CHARACTERS } from './actions/index'
import { combineReducers } from 'redux'

const intialState = [];

function characters(state = intialState, action) {

  if (action.type === 'RECEIVE_CHARACTERS') {
    return action.posts;
  }

  return state;
};


const rootReducer = combineReducers({
	characters
})

export default rootReducer