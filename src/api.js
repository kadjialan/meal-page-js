const BASE_URL = 'https://themealdb.com/api/json/v1/1/search.php?f=l';

function getPopularMovies() {
  return fetch(
    `${BASE_URL}`,
  ).then((res) => res.json())
    .then((res) => res.meals);
}

function searchMovies(query) {
  return fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${query}`,
  ).then((res) => res.json())
    .then((res) => res.meals);
}

export default { getPopularMovies, searchMovies };
