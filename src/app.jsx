import React, { Component } from 'react';

import './app.css';

import Movie from './Movie.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie/>
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    );
  }
}

export default App;
