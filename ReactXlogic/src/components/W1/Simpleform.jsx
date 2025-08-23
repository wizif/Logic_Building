import React, { useState } from "react";

function NameForm() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setGreeting(`Hello ${name}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {greeting && <h2>{greeting}</h2>}
    </div>
  );
}

export default NameForm;
