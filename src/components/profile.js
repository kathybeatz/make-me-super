import React, { Component } from 'react';
import axios from 'axios';

const Activities = [/*GET go here & correspond to TD below*/];

export default class Profile extends Component {


componentWillMount (){

  console.log("inside of componentWillMount!");

  return axios.get('/api/test')
  .then(function(resp){
    return resp.data;
    console.log('axios response: ', resp);
  })
  .catch(function(resp) {
    console.log('axios catch response ', resp);
  });
}

  render() {
    //using map/foreach, iterate through state to render each piece of
    //info for each activity
    return (
      <div>
      <h1>My Profile</h1>

      <table>

      <th>Saved Activities</th>
      <tr>
      <td>Type</td>
      <td>Title</td>
      <td>Location</td>
      <td>Link</td>
      </tr>

      <tr>/*Activities should populate here*/</tr>


      </table>
      </div>

    );
  };

}
