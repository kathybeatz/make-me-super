import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Search extends Component {

  handlePost() {

    axios.all([
      axios.post('/api/postActivity', { Title: 'Wingsuit over Dubai', Locale: 'Dubai, United Arab Emirates',
        Description: 'Always wanted to learn how to fly? This is your chance. Take to the air, then soar through the sky, thinking to yourself \'this is what it\'s like to be Batman\'. Pre-requisite: Skydive certification. See Freefall University',
        Links: 'www.skydivedubai.ae/sponsorship/wingusit.html' }),
      axios.post('/api/postActivity', { Title: 'Hot Air Balloon in Cappadocia', Locale: 'Cappadocia, Turkey',
        Description: '2,000 feet in the air overlooking one of the most iconic landscapes in all of air or wind sports',
        Links: 'www.hotairballooncappadocia.com/Ballooning-Safety.html' }),
      axios.post('/api/postActivity', { Title: 'Skydive Namibia', Locale: 'Swakopmund, Namibia',
        Description: 'Fall 10000 feet as you take in the incredible juxtaposition of bright blue Atlantic Ocean and the sprawling brown Namib desert.',
        Links: 'www.skydiveswakopmund.com/swakopmund/' })
    ])
    .then(axios.spread(function(response1, response2, response3) {
      console.log('handlePost() success!');
    }))
    .catch(function(response) {
      console.log('handlePost() error!');
    });
  }

  render(){
    return (
      <div className="container searchContainer">

        <header>
            <h1 id="headerText" className="header">Be Batman...</h1>
        </header>

        <div className="row paddingTop" id="activitiesList">

          <div className="col-md-4">
            <p className="lead activityText">Wingsuit Over Dubai</p>
            <label className="paragraphText">
              Always wanted to learn how to fly? This is your chance, Take to the air, then soar through the sky, thinking to yourself you are Batman.
              <br />
              <input type="radio" value="wingsuit" />
            </label>
          </div>

          <div className="col-md-4">
            <p className="lead activityText">Skydive Namibia</p>
            <label className="paragraphText">
              Two thousand feet in the air overlooking one of the most iconic landscapes in all of air or wind sports.
              <br />
              <input type="radio" value="namibia" />
            </label>
          </div>

          <div className="col-md-4">
            <p className="lead activityText">Hot Air Balloon in Cappadocia</p>
            <label className="paragraphText">
              Fall a thousand feet as you take in the incredible juxtaposition of bright blue Atlantic Ocean and the sprawling brown Namib desert.
              <br />
              <input type="radio" value="cappadocia" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText">Parasailing Catalina Island</p>
            <label className="paragraphText">
              Part sea, part air, but completely awesome, ascend six hundred feet harnessed to a speed-boat hoisted parachute Take in spectacular vistas of clear Pacific Coast waters, rugged Catalina Island Terrain, and the whimsically arranged city of Avalon An ultimate adventure on Catalina, and, may be free of charge on your birthday.
              <br />
              <input type="radio" value="parasailing" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText">Carnaval in Bahia</p>
            <label className="paragraphText">
              Go on an authentic Carnaval experience without all the tourists Enjoy Carnaval in Bahia!
              <br />
              <input type="radio" value="bahia" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText">Clubbing in Berghain</p>
            <label className="paragraphText">
              Go clubbing at most exclusive nightclub in Berlin Do not forget to wear all black to increase your chances of getting in and take a nap before heading out!
              <br />
              <input type="radio" value="berlin" />
            </label>
          </div>

        </div>
          <div className="paddingTop">
            <button className="btn btn-primary btn-lg button" type="button" onClick={this.handlePost}>
              <Link className="dropdown" to="/profile">
              Make Me Batman!
              </Link>
            </button>
          </div>
      </div>

    )
  }
}
