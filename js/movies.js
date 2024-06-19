import fetchData from "./http.js";
//import all methods
import { displayMovies,
    displayMovieDetails,
    displayBackgroundImage} from "./dom.js";
//--------------------------------------
 //Function to display all movies list
 const listPopularMovies = async () => {
  //connect with the part movie/popular
  const { results } = await fetchData('movie/popular');
  //console.log(results);
  //call the method displayMovies as the code is written there.
  displayMovies('#top-movies', results);
};
//----------------------end movie list-------------------
//-------------------------------------------------------
//Function to display each movie details page
const showMovieDetails = async () => {
  const movieId = window.location.search.split('=')[1];
  //connect with the part movie/${movieId}
  const movie = await fetchData(`movie/${movieId}`);
  console.log(movie);
  //call the methods as the code is written there.
  displayMovieDetails('#movie-details', movie);
  displayBackgroundImage('#movie-details', movie.backdrop_path);
};

export { listPopularMovies, showMovieDetails};

//---------------------end movies-details----------------
//-------------------------------------------------------
