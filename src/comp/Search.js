import React, { useState } from "react";
import data from "../resources/countryData.json";

function Search() {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState(false);
  const suggestion = data.filter((person) => {
    return person.name.toLowerCase().startsWith(value.toLowerCase());
  });
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="search"
          value={value}
          onFocus={() => setSuggestions(true)}
          onChange={handleChange}
        />
      </div>
      <div>
        {suggestions && (
          <div>
            {suggestion.map((item) => (
              <h3>{item.name}</h3>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
