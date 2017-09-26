import React, {Component} from 'react';

import './app.css';

import Movie from './Movie.jsx'


class App extends Component {

  state = {}

  render() {

    console.log('render')

    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    });

    console.log(movies);
    return movies;
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')

    setTimeout(() => {
      this.setState({
        movies: [
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
          {
            title: 'Transpotting',
            poster: 'https://www.bleedingcool.com/wp-content/uploads/2017/02/trainspotting-poster.jpg'
          },
        ]
      })
    }, 3000);
  }

  componentWillUpdate() {
    console.log('componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
}

export default App;
