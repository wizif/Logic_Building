import React, { useState } from 'react'

const ColorChange = () => {
    const [color,setColor]=useState("white");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        style={{
          width: "200px",
          height: "200px",
          margin: "20px auto",
          backgroundColor: color,
          border: "2px solid black"
        }}
      ></div>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

export default ColorChange
