import {
  ALL_USERS,
  RESET_INFO,
  RESET_LOADING,
  SET_LOADING,
  SET_USER,
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case RESET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case RESET_INFO:
      return {
        ...state,
        user: {},
        repos: [],
      };
    default:
      throw Error("State Logic Error");
  }
};

export default githubReducer;
