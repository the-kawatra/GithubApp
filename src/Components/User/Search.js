import React, { useContext, useState } from "react";
import AlertContext from "../../Context/Alert/AlertContext";
import GithubContext from "../../Context/Github/GithubContext";
import { SET_ALERT } from "../../Context/types";

const Search = () => {
  const { searchUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("danger", "Enter a valid Github Username");
    } else {
      searchUsers(text);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search User"
          onChange={handleChange}
          value={text}
        />
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
    </div>
  );
};

export default Search;
