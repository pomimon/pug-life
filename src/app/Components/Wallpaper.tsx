import pugpaper from "./../../assets/pugpaper.png";
import pugpaperclicked from "./../../assets/pugpaper-clicked.png";
import { useState } from "react";

export function Wallpaper() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div className="wallpaper">
      <img
        src={clicked ? pugpaperclicked : pugpaper}
        className="wallpaper-image"
        onClick={handleClick}
      />
    </div>
  );
}
