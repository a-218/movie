// import * as genersAPI from "./fakeGenreService"

const movies = [
  {
    _id: '1',
    title: 'terminator',
    genre: { _id: '', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "",
  },
  {
    _id: '2',
    title: 'teror',
    genre: { _id: '', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "",
  },
  {
    _id: '3',
    title: 'terminator',
    genre: { _id: '', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "",
  },
  {
    _id: '4',
    title: 'Die Hard',
    genre: { _id: '', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "",
  },
  {
    _id: '5',
    title: 'termss',
    genre: { _id: '', name: 'Action' },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "",
  }
]

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);

}

// export function saveMovie(movie) {
//   let movieInDb = movies.find(m => m._id === movie._id) || {};
//   movieInDb.name = movie.name;
//   movieInDb.genre = genresAPI.genresAPI.find(g => g._id === movie.genreId);
//   movieInDb.numberInStock = movie.numberInStock;
//   movieInDb.dailyRentalRate = movie.dailyRentalRate;
// }