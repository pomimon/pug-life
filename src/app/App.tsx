import "./../index.css";
import React from "react";
import pugIcon from "./../assets/wallpaper.png";
import { Header, Wallpaper, Desktop } from "./Components";

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
