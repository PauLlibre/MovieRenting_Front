import React from "react";
import "./NavBar.scss";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">FILMO</div>
      <div className="nav-bar-right">
        <ul>
          <li>Categories</li>
          <li>Renting</li>
        </ul>
      </div>
    </div>
  );
}
