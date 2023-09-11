import React, { useState } from "react";

const SearchComponent = ({ getSateliteName }) => {
  const [searchinput, setSearchInput] = useState("");
  const inputHandler = (value) => {
    setSearchInput(value);
  };
  const onClickHandler = () => {
    if (searchinput === "") {
      return;
    } else {
      getSateliteName(searchinput);
      setSearchInput("");
    }
  };

  return (
    <div>
      <input
        onChange={(e) => inputHandler(e.target.value)}
        value={searchinput}
      />
      <button onClick={onClickHandler}>Search</button>
    </div>
  );
};

export default SearchComponent;
