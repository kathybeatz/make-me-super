import React, { Component } from 'react'

export default class CharacterDetails extends Component {
  render() {
    return (
    <div className="attributes-box">
      <div className="row">
        <div className="col-md-4">
          <img className="attributes-pic" src={this.props.character.image}/>
        </div>
        <div className="col-md-4">
        <ul>
        	{this.props.character.name}
          {Object.keys(this.props.character.attributes).map((key) => 
          	<li>Key: {key}, Value: {this.props.character.attributes[key]} </li>
          )}
        </ul>
        </div>
      </div>
    </div>
    )
  }
}

