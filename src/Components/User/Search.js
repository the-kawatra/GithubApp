import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Search User"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input type="submit" className="btn btn-dark btn-block" />
        </form>
      </div>
    );
  }
}

export default Search;
