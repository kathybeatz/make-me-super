import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import fetchCharacters from './actions/index'
import CharacterList from './CharacterList'
import selectCharacter from './actions/index'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCharacters())
  }

  handleClick(character) {
    console.log(character)
    this.props.dispatch(selectCharacter(character))
  }

  render(){
    const { characters, character } = this.props
    return (
      <div>
        <CharacterList characters={characters}
                       handleClick={this.handleClick} />
      </div>
    )
  }

}

App.propTypes = {
  characters: PropTypes.array.isRequired,
  character: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const characters = state.listCharacters || []
  const character = state.selectCharacter || {}
  return {
    characters,
    character
  }
}

export default connect(mapStateToProps)(App)