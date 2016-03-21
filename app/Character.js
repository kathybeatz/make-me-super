import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom'
import fetchCharacters from './actions/index'
import styles from '/App.css'

export default class Character extends Component {
  constructor(props) {
  	super(props)
  }

  componentDidMount() {
  	const { dispatch } = this.props
  	dispatch(fetchCharacters())
  }
  render(){
    return (
      <div>
        <ul>
          {this.props.characters.map((character, i) => 
            <img key={i} src={character.image} />
          )}
        </ul>
      </div>
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