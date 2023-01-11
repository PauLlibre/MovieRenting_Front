import React from "react";
import "./NavBar.scss";
import { useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const handleMovies = () => {
    navigate("/movies");
  };
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">FILMO</div>
      <div className="nav-bar-right">
        <ul>
          <li onClick={handleHome}>Home</li>
          <li>Categories</li>
          <li onClick={handleMovies}>Renting</li>
        </ul>
      </div>
    </div>
  );
}
