import React, { Component } from 'react';
import axios from 'axios';

const Activities = [];

export default class Profile extends Component {


componentWillMount() {

  axios.get('/api/getActivity')
  .then(function(resp){

    Activities.push(resp.data);

    console.log('axios response: ', resp.data);
    console.log("****Activities", Activities);
  })
  .catch(function(resp) {
    console.log('axios catch response ', resp);
  });
}

  render() {
 
    
    return (
      <div className="profileContainer">

      
      <h1>My Profile</h1>

      <ul>

      {Activities.map(function(activity, index){
        return <li key={ index }>{activity}</li>;

      })}

      </ul>
      </div>

    );
  };

}


