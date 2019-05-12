import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, WINDY } from './../../constants/weathers';

const location = "Mexico,mx";
const api_key = "9093edda048fb38f39b3a91bd9d9e8a4";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
  temperature: 7,
  weatherState: SUN,
  humidity: 10,
  wind: '10 m/s',
}

const data2 = {
  temperature: 7,
  weatherState: WINDY,
  humidity: 15,
  wind: '10 m/s',
}

class WeatherLocation extends Component {
  constructor () {
    super();
    this.state = {
      city: 'México',
      data: data
    }
  }

  handleUpdateClick = () => {
    // this function is an example to a function with two promises
    fetch(api_weather).then( response => {
      return response.json()
    }).then( data =>{
      console.log('data', data)
    });
    this.setState({city: "Monterrey", data: data2})
  }

  render() {
    const { city, data} = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city}></Location>
        <WeatherData data={data}></WeatherData>
        <button onClick={this.handleUpdateClick}>Actualizar</button>
      </div>
    )
  }
}

export default WeatherLocation;