import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import TokenStorageService from "../../services/TokenStorageService";
import UserCard from "../../Components/UserCard/UserCard";
import "./Admin.scss";
import { useNavigate } from "react-router";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [role, setRole] = useState([]);
  const token = TokenStorageService.getToken();

  const userRole = async () => {
    const { role } = JSON.parse(localStorage.getItem("user"));
    setRole(role);
    console.log(role);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getUsers(token);
    userRole();
  }, []);

  const handleDelete = async (user_id) => {
    UserService.deleteById(user_id);
    getUsers(token);
  };

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
      return (
        <UserCard
          key={user._id}
          user={user}
          user_id={user._id}
          update={handleDelete}
        />
      );
    });
  };

  return (
    <div className="user">
      <div className="admin-title">Your current users:</div>
      <div className="users-list">{listUsers(users)}</div>
    </div>
  );
}
