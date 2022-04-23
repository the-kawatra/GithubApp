import { RESET_ALERT, SET_ALERT } from "../types";
const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        type: action.payload.type,
        msg: action.payload.msg,
      };
    case RESET_ALERT:
        return null;
    default:
      throw Error("Alert State Logic Error");
  }
};

export default alertReducer;
