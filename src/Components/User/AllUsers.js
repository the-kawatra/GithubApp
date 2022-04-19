import React, { useEffect, useContext } from "react";
import Users from "./Users";
import Search from "./Search";
import GithubContext from "../../Context/GithubContext";

const AllUsers = () => {
  const { getAllUsers } = useContext(GithubContext);
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Search />
      <Users />
    </>
  );
};

export default AllUsers;
