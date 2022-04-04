import React from "react";
import Loading from "./loading.gif";

class Spinner extends React.Component {
  render() {
    return (
      <img
        src={Loading}
        alt="Loading ..."
        style={{ display: "block", margin: "auto", width: "200px" }}
      />
    );
  }
}

export default Spinner;
