import React, { Component } from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
import { Link } from 'react-router';
>>>>>>> 26a783f28a001402cd509a4fdcf217d64c4ecb5f

export default class Search extends Component {

  // search.js
  componentWillMount() {

    console.log('--------------------inside componentWillMount!');
    // fetch all batman activities from db

    // test get request
    axios.get('/api/search')
      .then(function(response) {
        console.log('----------------------get response.data: ', response.data);
        console.log('----------------------get response.status:' , response.status);
      })
      .catch(function(response) {
        console.log('----------------------get catch error: ', response.data);
      });

    // test post request
    axios.post('/api/test')
      .then(function(response) {
        console.log('----------------------post response.data: ', response.data);
        console.log('----------------------post response.status:' , response.status);
      })
      .catch(function(response) {
        console.log('----------------------post catch error: ', response.data);
      });
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
