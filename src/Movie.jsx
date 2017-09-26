import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';


class Movie extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  };
  
  render() {
    return (
      <div>
        <MoviePoster poster={this.props.poster}/>
        <h3>{this.props.title}</h3>
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
