import React, { useRef, useState } from "react";
import "./style.css";
const SearchBox = (props) => {
  const { onSearch, searchSuggestions, searchText } = props;
  const [isSearchOn, setIsSearchOn] = useState(false);
  const inputRef = useRef();
  const onClickSearchIcon = () => inputRef.current.focus();
  console.log(searchSuggestions);

  return (
    <div>
      <div className="searchbox-container">
        <input
          ref={inputRef}
          className="search-box"
          onChange={(e) => onSearch(e.target.value)}
          maxLength={20}
          onFocus={() => setIsSearchOn(true)}
          onBlur={() => setIsSearchOn(false)}
        />
        <img
          src="https://test.create.diagnal.com/images/search.png"
          alt="search"
          width="20px"
          onClick={onClickSearchIcon}
        />
      </div>
      {searchText && (
        <div className="suggestion-box">
          {searchSuggestions.map((suggestion) => (
            <div> {suggestion} </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
