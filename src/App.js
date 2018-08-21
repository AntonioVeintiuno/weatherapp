import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        Weater app(aplicacion de clima)
        {/*here we can see that a component can be called a component in two different ways*/}
        <WeatherLocation/>
        <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
