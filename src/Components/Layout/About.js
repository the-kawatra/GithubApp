import React, { useReducer, useState } from "react";

const About = () => {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return {count: state.count + 1};
      case "DECREMENT":
        return {count: state.count - 1};
      default:
        throw Error("State Logic is Messed Up");
    }
  }
  const [appState, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>You clicked {appState.count} times</p>
      <button
        style={{ width: "50px" }}
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +
      </button>
      <button
        style={{ width: "50px" }}
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -
      </button>
    </div>
  );
};

export default About;
