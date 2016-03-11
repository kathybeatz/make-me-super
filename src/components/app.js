import React, { Component } from 'react';

import StringButton from './StringButton';
import InitPageHeader from './init-page-header';





export default class App extends Component {
  render(){
    return (
      <div className="text-center">
        <InitPageHeader />
        <StringButton text1="Props Text1" color='red' />
      </div>
    )
  }
}
