import state from "./state.js";
import { listPopularMovies, showMovieDetails } from "./movies.js";
//Function that include the routing,
//So that goes to the respective page.
const route = () => {
  switch (state.currrentPage) {
    case '/':
    case '/index.html':
      //console.log(state.currrentPage);
      listPopularMovies();
      break;
    case '/movie-details.html':
      //console.log(state.currrentPage);
      showMovieDetails();
      break;
  }
};

export default route;

