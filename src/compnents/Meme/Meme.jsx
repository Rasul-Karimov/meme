import React from "react";
import "./meme.css";
function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" className="form__input" placeholder="top text" />
        <input type="text" className="form__input" placeholder="Bottom text" />
        <button className="form__button">Get a new meme image</button>
      </form>
    </main>
  );
}

export default Meme;
