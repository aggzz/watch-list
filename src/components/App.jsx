import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import GridView from "./grid-view";
import SearchBox from "./searchbox";
import "./style.css";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalCount, setTotalCount] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [isResultLoading, setIsResultLoading] = useState(false);
  const [error, setError] = useState(null);
  const observerTarget = useRef(null);

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
    console.log(movieList.length, totalCount);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isResultLoading]);
  /*
  useEffect(() => {
    const observer = new IntersectionObserver((enteries) => {
      if (
        enteries[0].isIntersecting &&
        !searchText &&
        (movieList.length < totalCount || totalCount === null)
      ) {
        console.log("dsd", pageNumber);
        onScrollEnd();
        setPageNumber(pageNumber + 1);

        // fetchMovieList({ pageno: pageNumber + 1 });
      }
      console.log("djjhijksd", pageNumber);
    });
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => observer.disconnect();
  }, [observerTarget]);*/

  const handleSearch = (value) => {
    setSearchText(value);
  };

  const getSearchResult = useMemo(() => {
    const searchResult = movieList.filter((movieObj) =>
      movieObj.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return searchResult;
  }, [searchText]);

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
        <SearchBox onSearch={handleSearch} />
      </div>
      <GridView data={searchText ? getSearchResult : movieList} />
      {isResultLoading && <div className="loaidng-banner"> Loading </div>}
    </div>
  );
};

export default App;
