import React, {Component} from 'react';

import './app.css';

import Movie from './Movie.jsx'


const movies = [
  {
    title: 'Matrix',
    poster: 'https://www.movieposter.com/posters/archive/main/9/A70-4902'
  },
  {
    title: 'Full Metal Jacket',
    poster: 'https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg'
  },
  {
    title: 'Old boy',
    poster: 'http://imgmovie.naver.com/mdi/mi/0369/C6944-04.jpg'
  },
  {
    title: 'Star wars',
    poster: 'https://i.pinimg.com/originals/27/11/4e/27114ed141e95e152a83ee17ad9014ad.jpg'
  },
];


class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
