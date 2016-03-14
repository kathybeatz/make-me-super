import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Search extends Component {

  handlePost() {

    axios.post('/api/postActivity', { Title: 'wingsuit over Dubai', Locale: 'Dubai' })
      .then(function(response) {
        console.log('post response.data: ', response.data);
        console.log('post response.status:' , response.status);
      })
      .catch(function(response) {
        console.log('post catch error: ', response.data);
      });
  }

  render(){
    return (
      <div className="container searchContainer">

        <header>
            <h1 id="headerText" className="header">Batman...</h1>
        </header>

        <div className="row paddingTop" id="activitiesList">

          <div className="col-md-4">
            <p className="lead activityText">Wingsuit Over Dubai</p>
            <label className="activityText">
              <input type="radio" value="wingsuit" />
            </label>
          </div>

          <div className="col-md-4">
            <p className="lead activityText">Skydive Namibia</p>
            <label className="activityText">
              <input type="radio" value="namibia" />
            </label>
          </div>

          <div className="col-md-4">
            <p className="lead activityText">Hot Air Balloon - Cappadocia</p>
            <label className="activityText">
              <input type="radio" value="cappadocia" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText">Wingsuit Over Dubai</p>
            <label className="activityText">
              <input type="radio" value="wingsuit" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText">Skydive Namibia</p>
            <label className="activityText">
              <input type="radio" value="namibia" />
            </label>
          </div>

          <div className="col-md-4 paddingTop">
            <p className="lead activityText">Hot Air Balloon - Cappadocia</p>
            <label className="activityText">
              <input type="radio" value="cappadocia" />
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
