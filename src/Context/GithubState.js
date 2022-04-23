import React, { useReducer } from "react";
import githubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";
import { ALL_USERS, RESET_INFO, SET_LOADING, SET_USER } from "./types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    loading: true,
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const getAllUsers = () => {
    axios.get(`https://api.github.com/users`).then((res) => {
      dispatch({ type: ALL_USERS, payload: res.data });
    });
  };

  const searchUsers = async (query) => {
    dispatch({ type: SET_LOADING });
    let res = await axios.get(`https://api.github.com/search/users?q=${query}`);
    dispatch({ type: ALL_USERS, payload: res.data.items });
  };

  const getUserInfo = async (username) => {
    dispatch({ type: SET_LOADING });
    let user = await axios.get(`https://api.github.com/users/${username}`);
    let repos = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    dispatch({
      type: SET_USER,
      payload: { user: user.data, repos: repos.data },
    });
  };

  const resetUserInfo = () => {
    dispatch({ type: RESET_INFO });
  };

  return (
    <GithubContext.Provider
      value={{ ...state, getAllUsers, searchUsers, getUserInfo, resetUserInfo }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
