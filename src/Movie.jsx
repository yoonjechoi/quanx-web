import React, { Component } from 'react';

import './Movie.css';


class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster poster="https://upload.wikimedia.org/wikipedia/en/0/05/Now_You_See_Me_Cover.jpg"/>
        <h3>Now you see me</h3>
      </div>
    );
  }
}


class MoviePoster extends Component {
  render() {
    return (
      <img src={this.props.poster} alt="poster"/>
    );
  }
}

export default Movie;
