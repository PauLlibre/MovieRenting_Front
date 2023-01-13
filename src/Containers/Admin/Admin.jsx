import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import TokenStorageService from "../../services/TokenStorageService";
import UserCard from "../../Components/UserCard/UserCard";
import "./Admin.scss";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const token = TokenStorageService.getToken();
  console.log(token);

  useEffect(() => {
    getUsers(token);
  }, [token]);

  const getUsers = async (token) => {
    const res = await UserService.getAllUsers(token);
    console.log(res.data.data);
    setUsers(res.data.data);

    return res;
  };

  const listUsers = (users) => {
    console.log("llamada");
    return users.map((user) => {
      console.log(user);
      return <UserCard key={user._id} user={user} />;
    });
  };

  return <div className="users">{listUsers(users)}</div>;
}
