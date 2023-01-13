import React from "react";
import "./UserCard.scss";

export default function UserCard({ user }) {
  console.log(user.name);
  return <div className="user">{user.name}</div>;
}
