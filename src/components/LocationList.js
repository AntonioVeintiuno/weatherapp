import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
  <div>
    <WeatherLocation city="Mexico,mx"/>
    <WeatherLocation city="Bogota,col"/>
    <WeatherLocation city="Buenos Aires,ar"/>
  </div>
);

export default LocationList;