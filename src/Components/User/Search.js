import React, { useContext, useState } from "react";
import GithubContext from "../../Context/GithubContext";

const Search = () => {
  const { searchUsers } = useContext(GithubContext);

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter some text in Search Bar");
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
