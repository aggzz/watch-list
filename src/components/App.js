import React, { useEffect } from "react";
import GridView from "./grid-view";
import fetchMovieList from "../api/apiUtils";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: 50,
  },
});

const movieList = [{ title: "Johny", id: "aae" }];

const App = () => {
  const classes = useStyles();

  useEffect(() => {
    fetchMovieList();
  }, []);

  return (
    <div className={classes.root}>
      <GridView data={movieList} />
    </div>
  );
};

export default App;
