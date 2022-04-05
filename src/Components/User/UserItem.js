import React, { Component } from "react";

class UserItem extends Component {
  render() {
    return (
      <div className="card text-center">
        <img
          src={this.props.user.avatar_url}
          alt="User Image"
          style={{ width: "150px" }}
          className="round-img"
        />
        <h3>{this.props.user.login}</h3>
        <div>
          <a
            href={this.props.user.html_url}
            className="btn btn-dark btn-sm my-1"
            target="_blank"
          >
            Github Profile
          </a>
        </div>
      </div>
    );
  }
}

export default UserItem;
