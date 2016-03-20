import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import  { fetchCharacters, selectCharacter, deselectCharacter } from './actions'
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
    if (this.props.selection) {
      this.props.dispatch(deselectCharacter(character))
    } else {
      this.props.dispatch(selectCharacter(character))
    }
  }

  render(){
    const { characters, character, selection } = this.props
    console.log(selection)
    return (
      <div>
        <CharacterList characters={characters}
                       handleClick={this.handleClick} />
        {selection ? 
          <CharacterDetails character={character} /> :
          <div></div>
        }
      </div>
    )
  }
}

App.propTypes = {
  characters: PropTypes.array.isRequired,
  character: PropTypes.object.isRequired,
  selection: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
  const characters = state.listCharacters || []
  const character = state.characterDetails.character || {}
  const selection = state.characterDetails.selected || false
  console.log(selection)
  return {
    characters,
    character,
    selection
  }
}

export default connect(mapStateToProps)(App)