import React, { useEffect, useState, useMemo, useRef } from "react";
import GridView from "./grid-view";
import SearchBox from "./searchbox";
import './style.css';

const App = () => {
  const classes = useStyles();
  const [movieList, setMovieList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [ totalCount, setTotalCount ] = useState(null);
  const [ searchResult, setSearchResult ] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [ isResultLoading, setIsResultLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const fetchMovieList = async({ pageno }) => {
    setIsResultLoading(true);
    let response = await fetch(`https://test.create.diagnal.com/data/pages${pageno}.json`);
    try {
      if(response.status === 200 ){
        response = await response.json();
        const newList = movieList.concat(response?.page?.[`content-items`]?.content || []);
        setMovieList(newList);
        setTotalCount(response?.page?.[`total-content-items`]);
      }
    } catch(error) {

      
    }
  }


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
