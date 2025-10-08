import React, { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const count = text.length;
  const isLimitExceeded = count > 50;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Character Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows="5"
        cols="40"
        style={{
          border: "1px solid gray",
          borderRadius: "8px",
          padding: "10px",
          resize: "none",
        }}
      />
      <p
        style={{
          color: isLimitExceeded ? "red" : "black",
          fontWeight: "bold",
        }}
      >
        Characters: {count}
      </p>
    </div>
  );
};

export default CharacterCounter;
