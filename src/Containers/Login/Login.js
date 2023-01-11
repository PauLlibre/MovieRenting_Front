import React from "react";
import "./Login.scss";
import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleMail = (ev) => {
    setMail(ev.target.value);
  };

  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const credentials = {
    email: mail,
    password,
  };

  const login = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      console.log(res.data);

      switch (res.data.role) {
        case "user":
          navigate("/movies");
        case "admin":
          navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-root">
      <div className="name">
        <label>EMAIL</label>
        <input type="mail" value={mail} onChange={handleMail} />
      </div>
      <div>
        <label>PASSWORD</label>
        <input type="password" value={password} onChange={handlePassword} />
      </div>
      <button onClick={() => login(credentials)}>LOGIN</button>
    </div>
  );
}
