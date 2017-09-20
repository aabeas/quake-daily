import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeInfo from "./EarthquakeInfo";
import EarthquakeList from "./EarthquakeList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            <p>Earthquakes!</p>
          </div>
        </div>
        <p className="App-intro">
          <EarthquakeInfo />
          <EarthquakeList />
        </p>
      </div>
    );
  }
}

export default App;
