import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Search extends Component {

  componentWillMount() {

    // fetch all batman activities from db
    
  }

  render(){
    return (
      <div>
        <button className="btn btn-primary btn-lg button" type="button">
        <Link to="/profile">
        Make Me Batman!
        </Link>
        </button>
      </div>

    )
  }
}
