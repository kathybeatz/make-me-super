import { combineReducers } from 'redux'

import { 
  SELECT_CHARACTER, RECEIVE_CHARACTERS, DESELECT_CHARACTER
   } from './actions/index'


function character(state = {
  character: {},
}, action) {
  switch (action.type) {
    case SELECT_CHARACTER:
      return Object.assign({}, state, {
        character: action.character,
      })
    case DESELECT_CHARACTER:
      return Object.assign({}, state, {
        character: {},
      })
    default:
      return state
  }
}

function characterDetails(state = {}, action) {
  switch (action.type) {
    case SELECT_CHARACTER:
    case DESELECT_CHARACTER:
      return character(state[action.character], action)
    default:
      return state
  }
}

function selection(state = 0, action) {
  switch (action.type) {
    case SELECT_CHARACTER:
      return state + 1
    case DESELECT_CHARACTER:
      return state - 1
    default:
      return state
  }
}

function listCharacters(state = [], action) {
  switch (action.type) {
    case RECEIVE_CHARACTERS:
      return action.characters
    default:
      return state
  }
};


const rootReducer = combineReducers({
	characterDetails,
	listCharacters,
  selection
})

export default rootReducer