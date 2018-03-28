import React, { Component } from 'react';
import Map from "./components/Map";
import Places from "./components/Places";

class App extends Component {
  render() {
    return (
      <div className="App">
        this is the react app
        <Map />
        <Places />
      </div>
    );
  }
}

export default App;
