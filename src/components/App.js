import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    margin: 50
  }
});

const App = () => {
  const classes = useStyles();

  return <div className={classes.root}>Hello World !</div>;
};

export default App;
