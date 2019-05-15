import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PropTypes } from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

class WeatherLocation extends Component {
  constructor (props) {
    super(props);
    const { city } = props;
    this.state = {
      city,
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
    const api_weather = getUrlWeatherByCity(this.state.city);
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
WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
}
export default WeatherLocation;