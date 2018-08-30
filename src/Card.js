import React, { Component } from "react";
import Stars from "./Stars.js";
const Card = props => {
  const { movie = {} } = props;
  const {
    id = Math.random(),
    name = "",
    year = "",
    image = "https://png.icons8.com/ios/1600/no-camera.png",
    rate = 0
  } = movie;

  return (
    <div className="card">
      <img className="card-img-top" src={movie.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">
          {movie.name} ({movie.year})
        </h5>

        <Stars key={movie.id} rate={movie.rate} onStarClick={() => {}} />
      </div>
    </div>
  );
};

export default Card;
