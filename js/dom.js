//the method code to display all movies list
const displayMovies = (element, movies) => {
  movies.forEach((movie) => {
  //create dynamic HTML
  //create div as a card of movie
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <a href="/movie-details.html?id=${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Movie Titel"/>
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Premiere date: ${movie.release_date}</small>
        </p>
      </div>
    `;
    document.querySelector(element).appendChild(div);
  });
};
//----------------------end movie list------------
//------------------------------------------------
//the method code to display each movie details page
const displayMovieDetails = (element, movie) => {
  //Create essential div that include all the details of movie
  const div = document.createElement('div');
  div.innerHTML = `
    <div class="details-top">
      <div>${
        movie.poster_path
          ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="card-img-top" alt="${movie.title}"/>`
          : `img src="./assets./images/no-image.jpg"
            class="card-img-top" alt="${movie.title}"/>`
      }</div>
      <div>
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star rating"></i>
          ${movie.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Premiere: ${movie.release_date}</p>
        <p>${movie.overview}</p>
        <h4 class="movie-type">Genre</h4>
        <ul>
          ${movie.genres.map((genre) => `<li>${genre.name}</li>`).join('')}
        </ul>
      </div>
    </div>
  `;
  document.querySelector(element).appendChild(div);
};
//-----------------end movies-details------------
//-----------------------------------------------
//the method code to display background image that cover the page
const displayBackgroundImage = (element, backgroundPath) => {
  //Create div as a transparent background image that cover the page
  const overlayDiv = document.createElement('div');
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = 'cover';
  overlayDiv.style.backgroundPosition = 'center';
  overlayDiv.style.backgroundRepeat = 'no-repeat';
  overlayDiv.style.height = '100vh';
  overlayDiv.style.width = '100vw';
  overlayDiv.style.position = 'absolute';
  overlayDiv.style.top = '0';
  overlayDiv.style.left = '0';
  overlayDiv.style.zIndex = '-1';
  overlayDiv.style.opacity = '0.3';

  document.querySelector(element).appendChild(overlayDiv);
};
//----------------end background-image----------
//----------------------------------------------
//export all methods
export {displayMovies,
    displayMovieDetails,
    displayBackgroundImage};