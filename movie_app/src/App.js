import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {
  movies = [
    'Life of pie',
    'About time',
    'Avengers'
  ]
  poster = [
    'https://upload.wikimedia.org/wikipedia/en/5/57/Life_of_Pi_2012_Poster.jpg',
    'https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg',
    'https://cdn3.whatculture.com/images/2018/05/c2f68e7aacf19bc2-600x400.png'
  ]
  render() {
    return (
      <div className="App">
       <Movie title={this.movies[0]} poster={this.poster[0]}/>
       <Movie title={this.movies[1]} poster={this.poster[1]}/>
       <Movie title={this.movies[2]} poster={this.poster[2]}/>
      </div>
    );
  }
}

export default App;
