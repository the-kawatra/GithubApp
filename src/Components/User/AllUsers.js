import React, {useEffect} from "react";
import Users from "./Users";
import Search from "./Search";

const AllUsers = (props) => {
  useEffect(() => {
    props.getAllUsers();
  }, []);

  return (
    <>
      <Search searchUsers={props.searchUsers} />
      <Users loading={props.loading} users={props.users} />
    </>
  );
};

export default AllUsers;
