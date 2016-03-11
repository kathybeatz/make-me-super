import React, { Component } from 'react';

import StringButton from './StringButton';
import InitPageHeader from './init-page-header';
import MakeMeSuperButton from './init-page-button';
import DropdownMenu from './dropdown-menu';



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
