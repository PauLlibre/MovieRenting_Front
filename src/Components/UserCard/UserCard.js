import React from "react";
import "./UserCard.scss";
import UserService from "../../services/UserService";
import TokenStorageService from "../../services/TokenStorageService";
import { useState } from "react";

export default function UserCard({ user, user_id, update }) {
  const [token, setToken] = useState("");

  const handleDelete = async (user) => {
    await UserService.deleteById(token, user);
    update();
  };
  return (
    <div className="user">
      <button onClick={() => handleDelete(user_id)}>X</button>
      <div>{user.name}</div>
    </div>
  );
}
