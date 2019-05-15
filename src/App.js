import React, { Component } from 'react';
import LocationList from './components/LocationList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*here we can see that a component can be called a component in two different ways*/}
        <LocationList></LocationList>
      </div>
    );
  }
}

export default App;
