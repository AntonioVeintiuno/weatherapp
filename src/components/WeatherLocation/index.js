import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN } from './../../constants/weathers';
import transformWeather from './../../services/transformWeather';
import { api_weather } from "./../../constants/api_url";

const data = {
  temperature: 7,
  weatherState: SUN,
  humidity: 10,
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

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  componentWillMount(){
    console.log('componentWillMount')
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate')
  }



  handleUpdateClick = () => {
    // this function is an example to a function with two promises
    fetch(api_weather).then( response => {
      return response.json()
    }).then( data =>{
      const newWeaher = transformWeather(data);
      this.setState({
        data: newWeaher
      });
    });
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