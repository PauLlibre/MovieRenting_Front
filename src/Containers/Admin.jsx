import React from "react";
import UserService from "../services/UserService";
import TokenStorageService from "../services/TokenStorageService";

export default function Admin() {
  const token = TokenStorageService.getToken();
  return <div>Admin</div>;
}
