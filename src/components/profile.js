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

       <h1 className="profileHead">My Profile</h1>
       <h2 className="Welcome">Welcome, Batman!</h2>
       <br/>
       <h3 className="Customize">Customize</h3>

       <div className="tableContainer">
       <table class="flat-table" align="center">
  <tbody>
    <tr>
      <th>Title</th>
      <th>Locale</th>
      <th>Description</th>
      <th>Links</th>
    </tr>
    <tr>
      <td>Wingsuit Over Dubai</td>
      <td>Dubai</td>
      <td>Always wanted to learn how to fly? This is your chance. Take to the air, then soar through the sky, thinking to yourself this is what it is like to be a (enter your favorite winged creature, here). Prerequisite: Skydive certification. See Freefall University, below</td>
      <td>www.skydivedubai.ae/sponsorship/wingusit.html</td>
    </tr>
    <tr>
      <td>Skydive Namibia</td>
      <td>Swakopmund, Namibia</td>
      <td>Fall 10000 feet as you take in the incredible juxtaposition of bright blue Atlantic Ocean and the sprawling brown Namib desert.</td>
      <td>www.skydiveswakopmund.com/swakopmund/</td>
    </tr>
    <tr>
      <td>Hot Air Balloon In Cappadocia</td>
      <td>Cappadocia, Turkey</td>
      <td>2,000 feet in the air overlooking one of the most iconic landscapes in all of air or wind sports</td>
      <td>www.hotairballooncappadocia.com/Ballooning-Safety.html</td>
    </tr>

  </tbody>
  </table>
       </div>
      </div>

    );
  };

}


