import fetch from 'isomorphic-fetch'

export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'
export const SELECT_CHARACTER = 'SELECT_CHARACTER'

export function selectCharacter(character) {
  return {
  	type: SELECT_CHARACTER,
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