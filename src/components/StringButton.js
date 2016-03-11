import React, { Component } from 'react';



export default class StringButton extends Component {
  constructor() {
    super();

    this.state = {
      //insert stuff
      text: 'some string(state text)'
    };
  }

  changeText() {
    console.log(this.props)
    console.log(this.state)
    this.setState({ text: 'a changed string(state text)' });
    console.log(this.props)
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <h1> {this.state.text}</h1>
        <button onClick={this.changeText.bind(this)}> Change this.state.text </button>
        <h3 style={{color: this.props.color}}>{this.props.text1}</h3>
      </div>
    );
  }
}
