import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import { api_weather } from "./../../constants/api_url";

class WeatherLocation extends Component {
  constructor () {
    super();
    this.state = {
      city: 'México',
      data: null
    }
  }

  componentDidMount(){
    this.handleUpdateClick();
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
        { data ?
          <WeatherData data={data}/> :
          <CircularProgress size={50}/>
        }
      </div>
    )
  }
}

export default WeatherLocation;