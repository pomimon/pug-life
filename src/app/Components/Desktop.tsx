import lovePug from "./../../assets/love-pug.png";
import beggingPug from "./../../assets/begging-pug.png";
import flowerPug from "./../../assets/flower-pug.png";
import unimpressed from "./../../assets/unimpressed-pug.png";
import winkyPug from "./../../assets/winky-pug.png";
import sleepyPug from "./../../assets/sleepy-pug.png";
import bonePug from "./../../assets/bone-pug.png";
import headphonePug from "./../../assets/headphone-pug.png";
import boneStarPug from "./../../assets/bone-star-pug.png";
import ballPug from "./../../assets/ball-pug.png";
import flyingPug from "./../../assets/flying-pug.png";

export function Desktop() {
  const desktopItems = [
    {
      iconUrl: lovePug,
      text: "click and choose",
      onClick: () => alert("The Husky Pug mix is a popular hybrid."),
    },
    {
      iconUrl: beggingPug,
      text: "click please",
      onClick: () => alert("Female pugs tend to live a little longer."),
    },
    {
      iconUrl: flowerPug,
      text: "click click clicky",
      altText: "jihgfd",
      onClick: () => alert("Their face wrinkles are a badge of honor."),
    },
    {
      iconUrl: unimpressed,
      text: "not a click",
      onClick: () => alert("A group of pugs is called a “Grumble”."),
    },
    {
      iconUrl: sleepyPug,
      text: "click click click",
      onClick: () =>
        alert(
          "Tibetan monks raised the Pug and may have created the breed standard.",
        ),
    },
    {
      iconUrl: bonePug,
      text: "clicky clacky",
      onClick: () => alert("October 15th is national pug day."),
    },
    {
      iconUrl: headphonePug,
      text: "not a chick",
      onClick: () =>
        alert(
          "The pug's Latin motto is 'Multum in Parvo,' which means 'a lot in a little.'",
        ),
    },
    {
      iconUrl: boneStarPug,
      text: "no click",
      onClick: () => alert("I said, no click!"),
    },
    {
      iconUrl: ballPug,
      text: "click me too",
      onClick: () =>
        alert(
          "Marie Antoinette had a pug named Mops who accompanied her to France",
        ),
    },
    {
      iconUrl: flyingPug,
      text: "no, click me",
      onClick: () =>
        alert(
          "Pug owners often refer to their dogs' sudden bursts of energy as 'pugtona' or 'zoomies.'",
        ),
    },
  ];
  return (
    <div className="desktop">
      {desktopItems.map((item, index) => (
        <div key={index} className="desktop-item" onClick={item.onClick}>
          <img
            src={item.iconUrl}
            className="desktop-icon"
            alt={item.altText || "pugIcon"}
          />
          <span className="icon-text">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
