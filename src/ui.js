import './styles/styles.css';

const appcontainer = document.getElementById('app');
let maincontainer;

function createSearchBar(options) {
  const searchBar = document.createElement('form');
  searchBar.classList.add('nav');
  searchBar.innerHTML = `<button>home</button> <p>api</p> <p>forum</p> <i class="fa-brands fa-square-facebook"></i> 
  <i class="fa-brands fa-square-twitter"></i> <input type = 'search' name ='searchTerm' placeholder = 'search'>`;

  searchBar.addEventListener('submit', (e) => {
    e.preventDefault();
    options.onSearch(e.target.searchTerm.value);
  });

  return searchBar;
}

function createHeader({ onSearch }) {
  const header = document.createElement('header');
  header.classList.add('hero');
  header.innerHTML = '<h1 class = "title"> THE MEAl DB<h1>';
  header.appendChild(createSearchBar({ onSearch }));
  return header;
}

function createMain() {
  const main = document.createElement('main');
  main.classList.add('body');
  return main;
}

function createMovie(meals) {
  const movieElement = document.createElement('div');
  movieElement.classList.add('movie');
  movieElement.innerHTML = `<h2> ${meals.strMeal} </h2> <p> Area: ${meals.strArea}</p>`;
  const img = `${meals.strMealThumb}`;
  movieElement.style.backgroundImage = `url(${img})`;
  return movieElement;
}

function renderPage({ onSearch }) {
  appcontainer.innerHTML = '';
  appcontainer.appendChild(createHeader({ onSearch }));
  maincontainer = createMain();
  appcontainer.appendChild(maincontainer);
}

/* function renderMovies(movies = [1, 2, 3, 4, 5, 6]) {
  maincontainer.innerHTML = '';
  movies.forEach((movie) => {
    maincontainer.appendChild(createMovie(movie));
  });
} */

function renderMovies(meals) {
  maincontainer.innerHTML = '';
  meals.forEach((movie) => {
    maincontainer.appendChild(createMovie(movie));
  });
}

export default {
  renderPage,
  renderMovies,
};
