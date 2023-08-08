import React, { useEffect, useState } from "react";
import GridView from "./grid-view";
import fetchMovieList from "../api/apiUtils";
import { createUseStyles } from "react-jss";
import { useMemo } from "react/cjs/react.production.min";

const useStyles = createUseStyles({
  root: {
    margin: 50,
  },
});

// const movieList = [{ title: "Johny", id: "aae" }];

const App = () => {
  const classes = useStyles();
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [ totalCount, setTotalCount ] = useState(null);
  const [ searchResult, setSearchResult ] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    fetchMovieList();
  }, []);

  const onScroll = (pageNum) => {
    fetchMovieList({ pageNumber: pageNum });
  };

  const handleSearch = (value) => {
     setSearchText(value);
  }

  const getSearchResult = useMemo(() => {
     const searchResult = movieList.filter((movieObj) => movieObject
     .name
     .toLowerCase()
     .includes(searchText.toLowerCase()))
  }, [searchText])

  return (
    <div className={classes.root}>
      <SearchBox onSearch={handleSearch} onClear={} />
      <GridView 
        data={searchText ? getSearchResult(): movieList} 
        onScrollEnd={} 
      />
    </div>
  );
};

export default App;
