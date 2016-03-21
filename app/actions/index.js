import fetch from 'isomorphic-fetch'

export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'
export const SELECT_CHARACTER = 'SELECT_CHARACTER'
export const SELECT_SECOND = 'SELECT_SECOND'
export const DESELECT_CHARACTER = 'DESELECT_CHARACTER'
export const DESELECT_SECOND = 'DESELECT_SECOND'

export function selectCharacter(character) {
  return {
  	type: SELECT_CHARACTER,
  	character
  }
}

export function selectSecondCharacter(character) {
  return {
    type: SELECT_SECOND,
    character
  }
}

export function deselectCharacter(character) {
  return {
    type: DESELECT_CHARACTER,
    character
  }
}

export function deselectSecondCharacter(character) {
  return {
    type: DESELECT_SECOND,
    character
  }
}

function receiveCharacters(json) {
  return {
    type: RECEIVE_CHARACTERS,
    characters: json
  }
}

export function fetchCharacters () {
	return dispatch => {
    return fetch('/images')
      .then(response => response.json())
      .then(json => dispatch(receiveCharacters(json)))
  	}
}