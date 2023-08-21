import React, { useEffect, useState, useMemo } from "react";
import { GridView, SearchBox } from "./components";
import "./style.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isResultLoading, setIsResultLoading] = useState(false);
  const [error, setError] = useState(null);

  /* api call for fetching the list of movies */
  const fetchMovieList = async ({ pageno }) => {
    setIsResultLoading(true);
    let response = await fetch(
      `https://test.create.diagnal.com/data/page${pageno}.json`
    );
    try {
      if (response.status === 200) {
        response = await response.json();
        const newList = movieList.concat(
          response.page[`content-items`].content || []
        );
        setMovieList(newList);
        setTotalCount(response.page[`total-content-items`]);
        setPageNumber(pageno);
      } else {
        setError("Unable to load data");
      }
    } catch (error) {
      setError("Unable to load data");
    } finally {
      setIsResultLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieList({ pageno: 1 });
  }, []);

  /* handles scroll: 
      if scroll has reached the bottom, make the api call for the next set of
      movie list, till all the movies are listed in ui
  */
  const handleScroll = () => {
    if (
      window.innerHeight + Math.ceil(document.documentElement.scrollTop) <
      document.documentElement.offsetHeight
    ) {
      return;
    }
    if (
      !isResultLoading &&
      (movieList.length < totalCount || totalCount === null)
    ) {
      fetchMovieList({ pageno: pageNumber + 1 });
    }
    return;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isResultLoading]);

  /*-- search 
      search result displayed for a change in the search input field
  */

  const handleSearch = (value) => setSearchText(value);

  const getSearchResult = useMemo(() => {
    const searchResult = movieList.filter((movieObj) =>
      movieObj.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return searchResult;
  }, [searchText]);

  /* search-hints: - suggestions are displayed based on the search text and available movie list */
  const getSearchSuggestions = () => {
    let searchResult = searchText ? getSearchResult : movieList;
    searchResult = searchResult.map((searchItem) => searchItem.name);
    return Array.from(new Set(searchResult));
  };

  return (
    <div className="movielist-container">
      <div className="header">
        <div>
          <img
            src="https://test.create.diagnal.com/images/Back.png"
            alt="back-arrow"
            width="20px"
          />
          <span className="header-text"> Romantic Comedy </span>
        </div>
        <SearchBox
          onSearch={handleSearch}
          searchText={searchText}
          searchSuggestions={getSearchSuggestions()}
        />
      </div>
      <GridView data={searchText ? getSearchResult : movieList} />
      {isResultLoading && <div className="loaidng-banner"> Loading </div>}
    </div>
  );
};

export default App;
