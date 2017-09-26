import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Movie.css';

function Movie({title, poster}) {
  return (
    <div>
      <MoviePoster poster={poster}/>
      <h3>{title}</h3>
    </div>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
}

function MoviePoster({poster}) {
  return (
    <img src={poster} alt="poster"/>
  )
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired
};


export default Movie;
