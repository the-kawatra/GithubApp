import React, { useState } from "react";

const About = () => {
  const [state, setState] = useState({ count: 0, fruit: "Banana" });

  function increaseCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  }
  function decreaseCount() {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Something About Us</p>
      <p>The count is {state.count}</p>
      <button onClick={increaseCount}>Increase</button>
      <br />
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default About;
