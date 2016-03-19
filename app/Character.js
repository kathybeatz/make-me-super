import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import fetchCharacters from './actions/index'

//require ('./App.css');

export default class Character extends Component {
  constructor(props) {
  	super(props)
  }

  componentDidMount() {
  	const { dispatch } = this.props
  	dispatch(fetchCharacters())
  }
  render(){
    const characters = this.props
    return (
      <ul>
        hello
        {this.props.characters}
      </ul>
    )
  }

}

Character.propTypes = {
  characters: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  const characters = state.characters || []
  // console.log(characters);
  console.log(state.characters);
  return {
    characters
  }
}

export default connect(mapStateToProps)(Character)