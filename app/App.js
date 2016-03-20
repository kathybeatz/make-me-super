import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import fetchCharacters from './actions/index'
import CharacterList from './CharacterList'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCharacters())
  }
  render(){
    const { characters } = this.props
    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    )
  }

}

App.propTypes = {
  characters: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const characters = state.characters || []
  return {
    characters
  }
}

export default connect(mapStateToProps)(App)