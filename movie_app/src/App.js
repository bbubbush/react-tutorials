import React, { Component } from 'react';
import Movie from './Movie';

class App extends Component {
  state = {
    movies: [
      {
        title: "Life of pie",
        poster: "https://upload.wikimedia.org/wikipedia/en/5/57/Life_of_Pi_2012_Poster.jpg"
      },
      {
        title: "About time",
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7c/About_Time_%282013_film%29_Poster.jpg"
      },
      {
        title: "Avengers",
        poster: "https://cdn3.whatculture.com/images/2018/05/c2f68e7aacf19bc2-600x400.png"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      console.log('Hello');
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div> 
    );
  }
}

export default App;
