import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class Stars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <StarRatingComponent
          key={this.props.id}
          name="rate1"
          starCount={5}
          value={this.props.rate}
          onStarClick={nextValue => this.props.onStarClick(nextValue)}
        />
      </div>
    );
  }
}

export default Stars;
