import React, { Component } from "react";
import Stars from "./Stars.js";
class RatingFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="minimum-rate">
        <h3>Minimum rating</h3>
        <Stars
          key={this.props.id}
          rate={this.props.rate}
          onStarClick={nextValue => this.props.onStarClick(nextValue)}
        />
      </div>
    );
  }
}

export default RatingFilter;
