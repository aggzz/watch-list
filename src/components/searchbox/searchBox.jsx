import React, { useRef } from "react";
import "./style.css";
const SearchBox = (props) => {
  const { onSearch } = props;
  const inputRef = useRef();
  const onClickSearchIcon = () => inputRef.current.focus();

  return (
    <div className="searchbox-container">
      <input
        ref={inputRef}
        className="search-box"
        onChange={(e) => onSearch(e.target.value)}
      />
      <img
        src="https://test.create.diagnal.com/images/search.png"
        alt="search"
        width="20px"
        onClick={onClickSearchIcon}
      />
    </div>
  );
};

export default SearchBox;
