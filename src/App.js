import React, { Component } from 'react';
import "./App.css"
import Navbar from './Components/Layout/Navbar';
import Search from './Components/User/Search';
import Users from './Components/User/Users';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      loading: true
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

  render() {
    return (
        <div className='App'>
          <Navbar logo="fa-brands fa-github" appName="Github App"/>
          <div className="container">
            <Search searchUsers={this.searchUsers} />
            <Users users={this.state.users} loading={this.state.loading} />
          </div>
        </div>
    )
  }
}

export default App