import { ALL_USERS } from "./types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case ALL_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      throw Error("State Logic Error");
  }
};

export default githubReducer;
