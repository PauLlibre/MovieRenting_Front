import React from "react";
import "./UserCard.scss";
import UserService from "../../services/UserService";
import TokenStorageService from "../../services/TokenStorageService";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function UserCard({ user, user_id, update }) {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleDelete = async (user) => {
    await UserService.deleteById(token, user);
    update();
  };

  const handleUserDetails = () => {
    navigate(`/user/${user._id}`);
    console.log(user_id);
  };
  return (
    <div className="user-card-medium">
      <button onClick={() => handleDelete(user_id)} className="delete-button">
        X
      </button>
      <div onClick={handleUserDetails}>{user.name}</div>
    </div>
  );
}
