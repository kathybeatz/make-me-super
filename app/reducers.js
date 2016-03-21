import { combineReducers } from 'redux'
import merge from 'lodash/merge'

import { 
  SELECT_CHARACTER, SELECT_SECOND, RECEIVE_CHARACTERS, DESELECT_CHARACTER, DESELECT_SECOND
   } from './actions/index'

function characterDetails(state = {
  selected: false
}, action) {
  switch (action.type) {
    case SELECT_CHARACTER:
      return merge({}, state, action.character, {
        selected: true
      })
    case DESELECT_CHARACTER:
      return merge({}, {
        selected: false
      })
    default:
      return state
  }
}

function characterTwoDetails(state = {
  selected: false
}, action) {
  switch (action.type) {
    case SELECT_SECOND:
      return merge({}, state, action.character, {
        selected: true
      })
    case DESELECT_SECOND:
      return merge({}, {
        selected: false
      })
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