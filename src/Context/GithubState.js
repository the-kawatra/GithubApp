import React, { useReducer } from "react";
import githubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";
import { ALL_USERS } from "./types";

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

  return (
    <GithubContext.Provider value={{ ...state, getAllUsers }}>
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
