import React, { PropTypes, Component } from 'react'

export default class CharacterDetails extends Component {
  render() {
    console.log(this.props.character)
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

