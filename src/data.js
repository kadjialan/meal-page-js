const state = {
  meals: [],
};

function getMovies() {
  return state.meals;
}

function setMovies(meals) {
  state.meals = meals;
}

export default {
  getMovies,
  setMovies,
};
