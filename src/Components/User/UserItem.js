import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GithubContext from "../../Context/Github/GithubContext";

const UserItem = (props) => {
  const userTheme = useContext(GithubContext);

  return (
    <div
      style={{ background: userTheme.background, color: userTheme.foreground }}
      className="card text-center"
    >
      <img
        src={props.user.avatar_url}
        alt="User Image"
        style={{ width: "150px" }}
        className="round-img"
      />
      <h3>{props.user.login}</h3>
      <div>
        <Link
          to={`/user/${props.user.login}`}
          className="btn btn-dark btn-sm my-1"
        >
          Github Profile
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
