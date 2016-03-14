import React, { Component } from 'react';
import { Link } from 'react-router'; // jenna added 3/12/15

//@@TODO: make dropdown menu actually dropdown

export default class DropdownMenu extends Component {
  render(){
    return (
      <div className="dropdown">
        <button className="btn btn-primary dropdown-toggle" type="button">
         <Link to="/search" className="link">Batman !</Link>
        </button>
          <ul className="nav">
            <li><a href="#">Profiles</a></li>
            <li><a href="#">Alter Egos</a></li>
            <li><a href="https://github.com/Happy-Wolfpack/make-me-super">Contribute !?!(GitHub)</a></li>
          </ul>
      </div>
    )
  }
}
