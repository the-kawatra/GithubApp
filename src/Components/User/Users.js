import React, { Component } from 'react';
import UserItem from './UserItem';
import axios from 'axios';
import Spinner from '../Layout/Spinner';
import Search from './Search';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true
        };
    }
    async componentDidMount() {
        let res = await axios.get("https://api.github.com/users");
        this.setState({
            users: res.data,
            loading: false
        });
    }

    searchUsers = (query) => {
        console.log(query);
    };
    
  render() {
      const userStyle = {
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "1rem"
      }
    return this.state.loading ? (
        <Spinner />
        ) : (
        <>
            <Search searchUsers={this.searchUsers} />
            <div style={userStyle}>
                {this.state.users.map((user) => (
                    <UserItem user={user} key={user.id} />
                ))}
            </div>
        </>
    )
  }
}

export default Users