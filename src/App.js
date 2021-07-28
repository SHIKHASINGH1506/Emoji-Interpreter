import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiDictionary = {
    "😊": "Smilling",
    "😀": "Happy",
    "🤓": "Nerd Face",
    "😞": "Dissapointment",
    "❤️": "Heart",
    "🥺": "Pleading Face",
    "🔥": "Fire",
    "😰": "Anxious",
    "🎁": "Wrapped Gift"
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
      <h1>inside out!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <br />
      <h4>Emojis we know</h4>
      <ul>
        {emojiWeHave.map((emoji, index) => {
          return (
            <span
              key={emoji}
              style={{
                fontSize: "2rem",
                padding: "0.5rem",
                cursor: "pointer"
              }}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </ul>
    </div>
  );
}
