import { combineReducers } from 'redux'

import { 
  SELECT_CHARACTER, RECEIVE_CHARACTERS, DESELECT_CHARACTER
   } from './actions/index'


function character(state = {
  character: {},
  selected: false
}, action) {
  switch (action.type) {
    case SELECT_CHARACTER:
    console.log(action.character)
      return Object.assign({}, state, {
        character: action.character,
        selected: true
      })
    case DESELECT_CHARACTER:
      return Object.assign({}, state, {
        character: {},
        selected: false
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
	listCharacters
})

export default rootReducer