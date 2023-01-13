import React, { useState } from "react";
import { useNavigate } from "react-router";
import AuthService from "../../services/AuthService";
import "./Register.scss";

export default function Register() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleName = (ev) => {
    setName(ev.target.value);
  };
  const handleMail = (ev) => {
    setMail(ev.target.value);
  };
  const handlePassword = (ev) => {
    setPassword(ev.target.value);
  };

  const credentials = {
    name,
    email: mail,
    password,
  };

  const register = async (credentials) => {
    try {
      AuthService.register(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    register(credentials);
    navigate("/login");
  };

  return (
    <div className="register-root">
      <form>
        <label>NAME</label>
        <input type="text" value={name} onChange={handleName} />
        <label>SURNAME</label>
        <input type="text" />
        <label>EMAIL</label>
        <input type="mail" value={mail} onChange={handleMail} />
        <label>PASSWORD</label>
        <input type="password" value={password} onChange={handlePassword} />
        <button onClick={handleRegister}>REGISTER</button>
      </form>
    </div>
  );
}
