import React, { Component } from "react";
import "jquery";
import "tether";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardList from "./CardList.js";
import Search from "./Search";
import RatingFilter from "./RatingFilter";

let movie1 = {
  id: Math.random(),
  image:
    "https://www.virginmegastore.ae/medias/sys_master/root/ha4/hb4/9098253238302/Pirates-of-the-Caribbean-Dead-Men-Tell-No-Tales-326275-Detail.jpg",
  name: "Pirates of the Caribbean Dead Men Tell No Tales ",
  year: "2017",
  rate: 5
};
let movie2 = {
  id: Math.random(),
  image:
    "https://m.media-amazon.com/images/M/MV5BY2FmODc2N2QtYmY3MS00YTMwLWI2NGYtZWRmYWVkNjFjZmI0XkEyXkFqcGdeQXVyNTMxMjgxMzA@._V1_UX182_CR0,0,182,268_AL_.jpg",
  name: "The Revenant",
  year: "2015",
  rate: 4
};
let movie3 = {
  id: Math.random(),

  name: "point break ",
  year: "2015",
  rate: 3
};
let listofmovie = [movie1, movie2, movie3];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: listofmovie,
      minRateFilter: 2,
      nameFilter: ""
    };

    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(nextValue) {
    this.setState({ minRateFilter: nextValue });
  }

  getFiltredMovies() {
    return this.state.movies.filter(
      el =>
        el.rate >= this.state.minRateFilter &&
        el.name
          .toLowerCase()
          .includes(this.state.nameFilter.toLowerCase().trim())
    );
  }

  addNewMovie(movie) {
    this.setState({ movies: this.state.movies.concat(movie) });
  }

  render() {
    return (
      <div className="App">
        <Search
          value={this.state.nameFilter}
          onChange={newval => this.setState({ nameFilter: newval })}
        />

        <RatingFilter
          id="x"
          key="x"
          rate={this.state.minRateFilter}
          onStarClick={nextValue => this.onStarClick(nextValue)}
        />

        <CardList
          movies={this.getFiltredMovies()}
          AddNewMovie={newm => this.addNewMovie(newm)}
        />
      </div>
    );
  }
}

export default App;
