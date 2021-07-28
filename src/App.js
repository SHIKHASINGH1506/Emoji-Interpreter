import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "🐒": "Monkey",
    "🐶": "Dog",
    "🦧": "Orangutan",
    "🦍": "Gorilla",
    "🦊": "Fox",
    "🐺": "Wolf",
    "🦄": "Unicorn",
    "🐮": "Cow",
    "🐷": "Pig",
    "🐐": "Goat",
    "🐁": "Mouse",
    "🐿️": "Chipmunk",
    "🐻": "Bear",
    "🐔": "Chicken",
    "🦆": "Duck",
    "🦚": "Peacock",
    "🐸": "Frog",
    "🦜": "Parrot",
    "🐬": "Dolphin",
    "🦋": "Butterfly",
    "🦈": "Shark",
    "🐜": "Ant",
    "🕸️": "Spider Web",
    "🐙": "Octopus"
  };
  //convert object to array
  var emojiWeHave = Object.keys(emojiDictionary);

  // const [likeCounter, setLikeCounter] = useState(0);
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var inputEmoji = event.target.value;
    var meaning = emojiDictionary[inputEmoji];
    if (meaning === undefined) {
      meaning = "We dont't have this emoji in our database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        <em>Animoji!</em>
      </h1>
      <input
        style={{ borderRadius: "1rem", outline: "none" }}
        placeholder="Paste animal emoji here to see the exact meaning"
        onChange={emojiInputHandler}
      ></input>
      <h3>Translation will come here 👇</h3>
      <h2>{meaning}</h2>
      <hr></hr>
      <h4>Frequently used emojis</h4>
      <ul className="EmojiCollection">
        {emojiWeHave.map((emoji, index) => {
          return (
            <li
              className="Emoji"
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
