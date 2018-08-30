import React, { Component } from "react";
import "./search.css";
class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="input-group" id="adv-search">
              <input
                type="text"
                className="form-control"
                placeholder="Search for movies"
                onChange={event => this.props.onChange(event.target.value)}
              />
              <div className="input-group-btn">
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-primary">
                    <span
                      className="glyphicon glyphicon-search"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
