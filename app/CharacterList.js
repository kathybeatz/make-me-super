import React, { Component, PropTypes } from 'react'

export default class CharacterList extends Component {
  render(){
    return (
      <ul>
        {this.props.characters.map((character, i) => 
          <img key={i} src={character.image} />
        )}
      </ul>
    )
  }

}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired
}
