import React, { Component } from 'react'
import { Button, ProgressBar } from 'react-bootstrap'

export default class CharacterDetails extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6">
          <img className="attributes-pic" src={this.props.character.image}/>
        </div>
        <div className="col-md-6">
        <ul>
        	{this.props.character.name}
          {Object.keys(this.props.character.attributes).map((key) => 
          	<div>{key}
              <ProgressBar now={this.props.character.attributes[key]} label={"%(now)s"}/>
            </div>
          )}
        </ul>
        </div>
      </div>
    )
  }
}

