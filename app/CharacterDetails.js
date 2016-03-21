import React, { Component } from 'react'

export default class CharacterDetails extends Component {
  render() {
    return (
      <ul>
      	{this.props.character.name}
        {Object.keys(this.props.character.attributes).map((key) => 
        	<li>Key: {key}, Value: {this.props.character.attributes[key]} </li>
        )}
      </ul>
    )
  }
}

