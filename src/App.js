import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movieTitleInput: "",
      moviePosterInput: "",
      movieList: [
        {
          movieTitle: "Spiderman Far From Home",
          moviePoster:
            "http://cdn.collider.com/wp-content/uploads/2019/05/spider-man-far-from-home-poster-fury-mysterio-2.jpg"
        },
        {
          movieTitle: "Her",
          moviePoster:
            "https://images-na.ssl-images-amazon.com/images/I/41Eb7WxmYNL.jpg"
        }
      ]
    };
  }

  handleChange(prop, val) {
    this.setState({
      [prop]: val
    });

    console.log(this.state);
  }

  // this.state['string'] = val
  addMovie() {
    let { movieTitleInput, moviePosterInput } = this.state;
    let newMovieObj = {
      movieTitle: movieTitleInput,
      moviePoster: moviePosterInput
    };

    this.setState({
      movieList: [newMovieObj, ...this.state.movieList],
      movieTitleInput: "",
      moviePosterInput: ""
    });
  }

  render() {
    let movieList = this.state.movieList.map(movie => {
      return (
        <div>
          <MovieCard title={movie.movieTitle} poster={movie.moviePoster} />
        </div>
      );
    });

    return (
      <div className="App">
        <h1>my sweet movie list</h1>
        <input
          type="text"
          placeholder="movie title"
          onChange={e => this.handleChange("movieTitleInput", e.target.value)}
          value={this.state.movieTitleInput}
        />
        <input
          type="text"
          placeholder="poster url"
          onChange={e => this.handleChange("moviePosterInput", e.target.value)}
          value={this.state.moviePosterInput}
        />
        <button onClick={() => this.addMovie()}>add movie</button>
        {movieList}
      </div>
    );
  }
}

export default App;
