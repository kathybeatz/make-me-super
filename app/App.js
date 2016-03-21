import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import  { fetchCharacters, selectCharacter, selectSecondCharacter, deselectCharacter, deselectSecondCharacter } from './actions'
import CharacterList from './CharacterList'
import CharacterDetails from './CharacterDetails'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchCharacters())
  }

  handleClick(character) {
    const { characterOne, characterTwo, dispatch } = this.props
    if (characterOne.name === character.name) {
      dispatch(deselectCharacter(character))
    }
    else if (characterOne.selected) {
      dispatch(selectSecondCharacter(character))
    } else {
      dispatch(selectCharacter(character))
    }
    if (characterTwo.name === character.name) {
      dispatch(deselectSecondCharacter(character))
    } 
  }

  render(){
    const { characters, characterOne, characterTwo, selection } = this.props
    return (
      <div>
        <CharacterList characters={characters}
                       handleClick={this.handleClick} />
        { characterOne.selected ? <CharacterDetails character={characterOne} /> : <div></div> }
        { characterTwo.selected ? <CharacterDetails character={characterTwo} /> : <div></div> }
      </div>
    )
  }
}

App.propTypes = {
  characters: PropTypes.array.isRequired,
  characterOne: PropTypes.object.isRequired,
  characterTwo: PropTypes.object.isRequired,
}
//probably the best way to do this is to merge a 'selected' property onto each character and set it to true if selected
//false otherwise and have a limit of two character details listed

function mapStateToProps(state) {
  const characters = state.listCharacters
  const characterOne = state.characterDetails
  const characterTwo = state.characterTwoDetails
  return {
    characters,
    characterOne,
    characterTwo,
  }
}

export default connect(mapStateToProps)(App)