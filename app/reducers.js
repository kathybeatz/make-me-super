import { combineReducers } from 'redux'

import { SELECT_CHARACTER, RECEIVE_CHARACTERS } from './actions/index'

const intialState = [];

function selectCharacter(state = {}, action) {
	switch (action.type) {
    case SELECT_CHARACTER:
      return action.character
    default:
      return state
  }
}

function listCharacters(state = intialState, action) {

  switch (action.type) {
    case RECEIVE_CHARACTERS:
      return action.characters
    default:
      return state
  }
};


const rootReducer = combineReducers({
	selectCharacter,
	listCharacters
})

export default rootReducer