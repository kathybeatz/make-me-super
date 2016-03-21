import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import  { fetchCharacters, selectCharacter, selectSecondCharacter, deselectCharacter } from './actions'
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
    // if (character.name === this.props.characterOne.name) {
    //   this.props.dispatch(deselectCharacter(character))
    // } else {
      if (this.props.characterOne.selected) {
        this.props.dispatch(selectSecondCharacter(character))
      } else {
        this.props.dispatch(selectCharacter(character))
      }
    //}
  }

  render(){
    const { characters, characterOne, characterTwo, selection } = this.props
    return (
      <div>
        <CharacterList characters={characters}
                       handleClick={this.handleClick} />
        { characterOne.name ? <CharacterDetails character={characterOne} /> : <div></div> }
        { characterTwo.name ? <CharacterDetails character={characterTwo} /> : <div></div> }
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
  console.log(state)
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