//TYpically we would store in {process.env.API_KEY}
const API_KEY = 'bc367e722a60991e80555c78c2e58e72';

const requests = {
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `/now_playing/movie/day?api_key=${API_KEY}`,
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
