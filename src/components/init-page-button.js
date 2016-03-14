import React, { Component } from 'react';

//<img src={this.state.imageUrl} className="img-rounded" alt="Your Alter Ego!" width="304" height="236" />

//the hack object to hold images
const urlArray = [
  "../src/images/spiderman-symbol.png",
  "../src/images/green_lantern-symbol.png",
  "../src/images/wonder_woman-symbol.png",
  "../src/images/chuck_norris-symbol.png",
  "../src/images/batman-symbol.png"
];

let i = 0;

export default class MakeMeSuperButton extends Component {

  constructor() {
    super();

    this.state = {
      imageUrl: urlArray[0]
    };
  }


  render(){
    return (
      <div onClick={this.clickhandler.bind(this)}>
      <img src={this.state.imageUrl} alt="Your Alter Ego!" width="400" height="315" />

      </div>
    )
  }

  clickhandler() {
    if(urlArray[i + 1]){
      this.setState({ imageUrl: urlArray[i + 1] })
      i++;
    } else {
      i = 0
      this.setState({ imageUrl: urlArray[i]})
    }
  }
}
