import React, { Component } from "react";
import Card from "./Card.js";

class CardList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="card-group">
          {this.props.movies.map((el, i) => (
            <Card key={el.id} movie={el} />
          ))}
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.props.AddNewMovie({
              id: Math.random(),
              name: prompt("movie title: "),
              rate: Number(prompt("movie rating: ")),
              year: Number(prompt("movie year: "))
            });
          }}
        >
          Add Movie
        </button>
      </div>
    );
  }
}

export default CardList;
