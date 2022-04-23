import React, { useReducer, useContext } from "react";
import githubReducer from "./GithubReducer";
import GithubContext from "./GithubContext";
import axios from "axios";
import {
  ALL_USERS,
  RESET_INFO,
  RESET_LOADING,
  SET_LOADING,
  SET_USER,
} from "../types";
import AlertState from "../Alert/AlertState";

const GithubState = (props) => {
  const setAlert = useContext(AlertState);
  const initialState = {
    users: [],
    loading: true,
    user: {},
    repos: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  const getAllUsers = () => {
    axios
      .get(`https://api.github.com/users`)
      .then((res) => {
        dispatch({ type: ALL_USERS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: RESET_LOADING });
        setAlert("danger", "Error in fetching data, Please try again");
      });
  };

  const searchUsers = async (query) => {
    try {
      dispatch({ type: SET_LOADING });
      let res = await axios.get(
        `https://api.github.com/search/users?q=${query}`
      );
      dispatch({ type: ALL_USERS, payload: res.data.items });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      setAlert("danger", "Please Enter a valid Github Username");
      console.log(error);
    }
  };

  const getUserInfo = async (username) => {
    try {
      dispatch({ type: SET_LOADING });
      let user = await axios.get(`https://api.github.com/users/${username}`);
      let repos = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      dispatch({
        type: SET_USER,
        payload: { user: user.data, repos: repos.data },
      });
    } catch (error) {
      dispatch({ type: RESET_LOADING });
      setAlert("danger", "Error in getting userinfo, Please valid username");
      console.log(error);
    }
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
