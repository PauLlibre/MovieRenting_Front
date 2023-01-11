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
    <div className="home-root">
      Home
      <div>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleRegister}>REGISTER</button>
      </div>
    </div>
  );
}
