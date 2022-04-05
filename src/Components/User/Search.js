import React, { Component } from "react";
import axios from "axios";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = async (e) => {
    this.props.searchUsers(this.state.text);
    e.preventDefault();
    let res = await axios.get(
      `https://api.github.com/search/users?q=${this.state.text}`
    );
    console.log(res.data);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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
