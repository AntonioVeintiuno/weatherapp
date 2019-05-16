import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities = [
  "Ciudad de México,mx",
  "Buenos Aires,ar",
  "Madrid,es",
  "washington,us",
  "Lima,pe"
];
class App extends Component {
  handleSelectionLocation = city => {
    console.log('handleselectionLocation, en',city);
  }
  render() {
    return (
      <div className="App">
        {/*here we can see that a component can be called a component in two different ways*/}
        <LocationList cities={cities}
          onSelectedLocation={this.handleSelectionLocation}>
        </LocationList>
      </div>
    );
  }
}

export default App;
