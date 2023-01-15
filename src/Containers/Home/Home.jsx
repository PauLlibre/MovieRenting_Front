import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="home-root ">
      <div className="home-title movies-list-animation">FILMO</div>
      <div className="home-buttons movies-list-animation">
        <button className="home-button" onClick={handleLogin}>
          LOGIN
        </button>
        <button className="home-button" onClick={handleRegister}>
          REGISTER
        </button>
      </div>
    </div>
  );
}
