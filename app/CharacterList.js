import React, { Component, PropTypes } from 'react'

export default class CharacterList extends Component {
  render(){
    const { characters, handleClick } = this.props
    return (
      <ul>
        {this.props.characters.map((character, i) => 
          <img className="character-img-size" onClick={e => handleClick(character)} key={i} src={character.image} />
        )}
      </ul>
    )
  }
}

CharacterList.propTypes = {
  characters: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired
}
