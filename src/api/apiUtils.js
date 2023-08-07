const fetchMovieList = async () => {
  let response = await fetch("https://test.create.diagnal.com/data/page1.json");
  if (response.status === 200) {
    response = await response.json();
    console.log(response);
  }
};

export default fetchMovieList;
