import React, { Component } from 'react';


const todos =[
{
  task: 'Build An app',
  isCompleted: false
},
{
  task: 'get rich',
  isCompleted: true
}
];



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1> Hello world</h1>
      </div>
    );
  }
}
