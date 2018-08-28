import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*here we can see that a component can be called a component in two different ways*/}
        <WeatherLocation/>
      </div>
    );
  }
}

export default App;
