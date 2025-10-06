import React, { useState } from "react";

const SearchFilter = () => {
  const names = ["Arvind", "Akshay", "Rahul", "Sneha", "Riya"];
  const [query, setQuery] = useState("");

  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Search Filter</h2>
      <input
        type="text"
        placeholder="Search name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;
