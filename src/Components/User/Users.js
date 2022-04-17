import React from "react";
import UserItem from "./UserItem";
import Spinner from "../Layout/Spinner";

const Users = (props) => {
  const userStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
  };
  
  return props.loading ? (
    <Spinner />
  ) : (
    <div style={userStyle}>
      {props.users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export default Users;
