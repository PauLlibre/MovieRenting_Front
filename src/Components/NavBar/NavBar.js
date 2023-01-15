import React, { useEffect } from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router";
import TokenStorageService from "../../services/TokenStorageService";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, logout } from "../../features/login/loginSlice";
import { logoutUser, checkUser } from "../../features/userData/userDataSlice";
import { stringToAlpha } from "tsparticles-engine";

export default function NavBar() {
  const loginState = useSelector((state) => state.login.isLoggedIn);
  const userData = useSelector((state) => state.userData);

  const userName = JSON.parse(localStorage.getItem("user")) || {
    user: "",
    user_id: "",
    user_role: "",
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    dispatch(checkLogin());
    dispatch(checkUser());
  }, [userData]);

  const handleMovies = () => {
    navigate("/movies");
  };

  const handleLogout = () => {
    console.log("Successfully logged out");
    TokenStorageService.logOut();
    dispatch(logout());
    dispatch(logoutUser());
    navigate("/");
  };

  const isAdmin = () => {
    if (userName.role == "admin") {
      return "admin";
    }
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const isLoggedIn = () => {
    if (loginState) {
      return "Logout";
    } else {
      return "Login";
    }
  };
  return (
    <div className="nav-bar">
      <ul>
        <div className="logo">FILMO</div>
        <li onClick={handleHome}>Home</li>
        <li>Categories</li>
        <li onClick={handleMovies}>Renting</li>
        <li onClick={handleLogout}>{isLoggedIn(loginState)}</li>
        <li className="logo">{userName.name}</li>
        <li onClick={handleAdmin}>{isAdmin()}</li>
      </ul>
    </div>
  );
}
