import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.isLoggedIn);

  useEffect(() => {
    if (!loginState) {
      navigate("/");
    }
  }, []);

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
