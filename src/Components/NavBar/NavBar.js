import React, { useEffect } from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router";
import TokenStorageService from "../../services/TokenStorageService";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/login/loginSlice";

export default function NavBar() {
  const loginState = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    isLoggedIn();
  }, [loginState]);

  const handleMovies = () => {
    navigate("/movies");
  };

  const handleLogout = () => {
    console.log("Successfully logged out");
    TokenStorageService.logOut();
    dispatch(logout());
    navigate("/");
  };

  const isLoggedIn = () => {
    if (loginState === true) {
      return "Logout";
    } else {
      console.log(loginState);
      return "Login";
    }
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">FILMO</div>
      <div className="nav-bar-right">
        <ul>
          <li onClick={handleHome}>Home</li>
          <li>Categories</li>
          <li onClick={handleMovies}>Renting</li>
          <li onClick={handleLogout}>{isLoggedIn(loginState)}</li>
        </ul>
      </div>
    </div>
  );
}
