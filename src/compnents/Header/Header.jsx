import React from "react";
import "./header.css";
function Header() {
  return (
    <header className="header">
      <div className="header__img">
        <img src="./img/troll.png" alt="нет фото" />
      </div>
      <h2>Meme Generator</h2>
      <h4>React Course-project</h4>
    </header>
  );
}

export default Header;
