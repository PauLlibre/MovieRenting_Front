import React from "react";
import "./Register.scss";

export default function Register() {
  return (
    <div className="register-root">
      <form>
        <label>NAME</label>
        <input type="text" />
        <label>SURNAME</label>
        <input type="text" />
        <label>EMAIL</label>
        <input type="mail" />
        <label>PASSWORD</label>
        <input type="password" />
      </form>
    </div>
  );
}
