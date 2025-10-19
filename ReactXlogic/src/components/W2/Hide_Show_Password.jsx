import React, { useState } from "react";

const PasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Show / Hide Password</h2>

      <input
        type={visible ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid gray",
          marginRight: "10px",
        }}
      />

      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default PasswordToggle;
