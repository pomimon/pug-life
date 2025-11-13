import "./../index.css";
import React from "react";

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
