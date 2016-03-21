import { combineReducers } from 'redux'
import merge from 'lodash/merge'

import { 
  SELECT_CHARACTER, SELECT_SECOND, RECEIVE_CHARACTERS, DESELECT_CHARACTER
   } from './actions/index'


function character(state = {
  selected: true
}, action) {
  switch (action.type) {
    case SELECT_CHARACTER:
      return merge({}, state, action.character)
    case SELECT_SECOND:
      return merge({}, state, action.character)
    case DESELECT_CHARACTER:
      return merge({}, state, action.character, {
        selected: false
      } )
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

function characterTwoDetails(state = {}, action) {
  switch (action.type) {
    case SELECT_SECOND:
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
	listCharacters,
  characterTwoDetails
})

export default rootReducer