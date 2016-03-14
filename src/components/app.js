import React, { Component } from 'react';

import StringButton from './StringButton';
import InitPageHeader from './init-page-header';
import MakeMeSuperButton from './init-page-button';
import DropdownMenu from './dropdown-menu';

//the proper object to hold the images
const imageUrls = {
  batman: "../src/images/spiderman-symbol.png",
}



export default class App extends Component {
  render(){
    return (
      <div className="text-center init-page">
        <InitPageHeader />
        <DropdownMenu />
        <MakeMeSuperButton />
      </div>
    )
  }

}
