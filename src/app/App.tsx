import "./../index.css";
import React from "react";
import pugIcon from "./../assets/wallpaper.png";
import { Header, Wallpaper } from "./Components";

function Desktop() {
  return (
    <div className="desktop">
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no click</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">click</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no clicky</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no click</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no click</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no click</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no click</span>
      </div>
      <div className="desktop-item">
        <img src={pugIcon} className="desktop-icon" alt="Pug Icon" />
        <span className="icon-text">no click</span>
      </div>
    </div>
  );
}

export function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>

      <main>
        <Wallpaper />
        <Desktop />
      </main>
    </>
  );
}

export default App;
