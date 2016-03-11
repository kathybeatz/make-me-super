import React, { Component } from 'react';

export default class MakeMeSuperButton extends Component {

  constructor() {
    super();

    this.state = {
      imageUrl: "http://www.jdslabs.com/images/engraving/cart/2016/2/batman.png"
    };
  }

  render(){
    return (
    <div>
      <img src={this.state.imageUrl} className="img-rounded" alt="Your Alter Ego!" width="304" height="236" />
    </div>
    )
  }
}
