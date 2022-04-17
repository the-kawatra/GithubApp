import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import AllUsers from "./Components/User/AllUsers";
import User from "./Components/User/User";
import About from "./Components/Layout/About";
import NotFound from "./Components/Layout/NotFound";
import axios from "axios";

const App = () => {
  const [appData, setAppData] = useState({
    users: [],
    loading: true,
    user: {},
    repos: [],
  });

  const getAllUsers = () => {
    axios.get("https://api.github.com/users").then((res) => {
      setAppData({
        ...appData,
        users: res.data,
        loading: false,
      });
    });
  };

  const searchUsers = async (query) => {
    setAppData({ loading: true });
    let res = await axios.get(`https://api.github.com/search/users?q=${query}`);
    setAppData({
      ...appData,
      users: res.data.items,
      loading: false,
    });
  };

  const getUserInfo = async (username) => {
    setAppData({ ...appData, loading: true });
    let user = await axios.get(`https://api.github.com/users/${username}`);
    let repos = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    setAppData({
      ...appData,
      user: user.data,
      repos: repos.data,
      loading: false,
    });
  };

  const resetUserInfo = () => {
    setAppData({
      ...appData,
      user: {},
      repos: [],
    });
  };

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
                  user={appData.user}
                  repos={appData.repos}
                  getUserInfo={getUserInfo}
                  loading={appData.loading}
                  resetUserInfo={resetUserInfo}
                  {...props}
                />
              )}
            />
            <Route exact path="/">
              <AllUsers
                searchUsers={searchUsers}
                users={appData.users}
                loading={appData.loading}
                getAllUsers={getAllUsers}
              />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
