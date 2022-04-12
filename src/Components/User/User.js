import axios from "axios";
import React, { Component} from "react";
import { Link } from "react-router-dom";
import Repos from './Repos';

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      repos: [],
    };
  }

  async componentDidMount() {
    let user = await axios.get(
      `https://api.github.com/users/${this.props.match.params.id}`
    );
    let repos = await axios.get(
      `https://api.github.com/users/${this.props.match.params.id}/repos`
    );
    this.setState({
      user: user.data,
      repos: repos.data,
    });
  }

  render() {
    return (
      <div>
        <Link to="/" className="btn btn-light">
          Back to Home
        </Link>
        Hireable :{" "}
        {this.state.user.hireable ? (
          <i className="fa-solid fa-check text-success"></i>
        ) : (
          <i className="fa-solid fa-circle-xmark text-danger"></i>
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={this.state.user.avatar_url}
              alt="User Profile Picture"
              className="round-img"
              style={{ width: "200px" }}
            />
            <h2>{this.state.user.login}</h2>
            <p>Location : {this.state.user.location}</p>
          </div>
          <div>
            {this.state.user.bio && (
              <>
                <h3>Bio</h3>
                <p>{this.state.user.bio}</p>
              </>
            )}
            <a
              href={this.state.user.html_url}
              className="btn btn-dark my-1"
              target="_blank"
              rel="noreferrer"
            >
              Go to Github Profile
            </a>
            <ul>
              <li>
                <strong>Name :</strong> {this.state.user.name}
              </li>
              {this.state.user.company && (
                <li>
                  <strong>Work :</strong> {this.state.user.company}
                </li>
              )}
              {this.state.user.blog && (
                <li>
                  <strong>Website :</strong> {this.state.user.blog}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">
            Followers : {this.state.user.followers}
          </div>
          <div className="badge badge-success">
            Following : {this.state.user.followeing}
          </div>
          <div className="badge badge-light">
            Public Repos : {this.state.user.public_repos}
          </div>
          <div className="badge badge-danger">
            Public Gists : {this.state.user.public_gists}
          </div>
        </div>
        <Repos repos={this.state.repos} />
      </div>
    );
  }
}

export default User;
