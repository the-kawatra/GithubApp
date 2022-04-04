import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return <nav className='navbar bg-primary'>
        <a href="/">
            <h1>
                <i className={this.props.logo}></i> {this.props.appName}
            </h1>
        </a>
        <ul>
            <li>
                <a href='/home'>Home</a>
            </li>
            <li>
                <a href='/about'>About</a>
            </li>
            <li>
                <a href='/users'>Users</a>
            </li>
        </ul>
    </nav>
  }
}

export default Navbar