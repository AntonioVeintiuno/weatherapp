import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';

const LocationList = ({cities}) => {
  console.log('cieit',cities)
  return(
   <div>
      <WeatherLocation city="Mexico,mx"/>
      <WeatherLocation city="Bogota,col"/>
      <WeatherLocation city="Buenos Aires,ar"/>
    </div>
  )};

LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
}

export default LocationList;