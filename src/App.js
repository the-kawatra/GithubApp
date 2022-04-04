import React, { Component } from 'react';
import "./App.css"
import Navbar from './Components/Layout/Navbar';
import Users from './Components/User/Users';

class App extends Component {
  render() {
    return (
        <div className='App'>
          <Navbar logo="fa-brands fa-github" appName="Github App"/>
          <div className="container">
            <Users />
          </div>
        </div>
    )
  }
}

export default App