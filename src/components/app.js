import React, { Component } from 'react';

import StringButton from './StringButton';
import InitPageHeader from './init-page-header';
import MakeMeSuperButton from './init-page-button'




export default class App extends Component {
  render(){
    return (
      <div className="text-center">
        <InitPageHeader />
        <MakeMeSuperButton />
        <StringButton text1="Props Text1" color='red' />
      </div>
    )
  }
}
