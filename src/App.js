import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Search from "./Components/User/Search";
import Users from "./Components/User/Users";
import User from "./Components/User/User";
import About from "./Components/Layout/About";
import NotFound from "./Components/Layout/NotFound";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true,
      user: {},
      repos: [],
    };
  }

  async componentDidMount() {
    let res = await axios.get("https://api.github.com/users");
    this.setState({
      users: res.data,
      loading: false,
    });
  }

  searchUsers = async (query) => {
    this.setState({ loading: true });
    let res = await axios.get(`https://api.github.com/search/users?q=${query}`);
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  getUserInfo = async (username) => {
    this.setState({ loading: true });
    let user = await axios.get(`https://api.github.com/users/${username}`);
    let repos = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    this.setState({
      user: user.data,
      repos: repos.data,
      loading: false,
    });
  };

  resetUserInfo = () => {
    this.setState({
      user: {},
      repos: [],
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar logo="fa-brands fa-github" appName="Github App" />
          <div className="container">
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route
                exact
                path="/user/:id"
                render={(props) => (
                  <User
                    user={this.state.user}
                    repos={this.state.repos}
                    getUserInfo={this.getUserInfo}
                    loading={this.state.loading}
                    resetUserInfo={this.resetUserInfo}
                    {...props}
                  />
                )}
              />
              <Route exact path="/">
                <Search searchUsers={this.searchUsers} />
                <Users users={this.state.users} loading={this.state.loading} />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
