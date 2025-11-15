import React from "react";
import pugIcon from "./../../assets/pug-icon.png";

export function Header() {
  return (
    <div className="header">
      <div className="header-brand">
        <img src={pugIcon} className="header-icon" alt="Pug Icon" />
      </div>
      <div className="header-menu">
        <div className="header-start">
          <div className="header-item">Home</div>
          <a className="header-item" href="https://github.com/pomimon">
            GitHub
          </a>
          <div className="header-item">Resume</div>
        </div>
        <div className="header-end">
          <a className="header-item" href="https://puginarug.com/">
            Pugs
          </a>
        </div>
      </div>
    </div>
  );
}
