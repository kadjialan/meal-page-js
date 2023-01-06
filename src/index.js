import ui from './ui';
import data from './data';
import api from './api';

/* ui.renderPage();
api.getPopularMovies().then((movies) => {
    data.setMovies(movies.meals);
    ui.renderMovies(data.getMovies());
}); */

function updateMovies(movies) {
  data.setMovies(movies);
  ui.renderMovies(data.getMovies());
}

ui.renderPage({
  onSearch: (searchTerm) => {
    api.searchMovies(searchTerm).then(updateMovies);
  },
});

api.getPopularMovies().then(updateMovies);
