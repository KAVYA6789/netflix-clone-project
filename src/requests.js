const API_KEY = "e9a2cddf273cef9aee4d992be656b86f";
const requests = {
fetchTrending:`https://api.themoviedb.org/3/trending/all/week?api_key=e9a2cddf273cef9aee4d992be656b86f&language=en-US`,
fetchNetflixOriginals:`https://api.themoviedb.org/3/discover/tv?api_key=e9a2cddf273cef9aee4d992be656b86f&with_networks=213`,
fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=e9a2cddf273cef9aee4d992be656b86f&language=en-US`,
fetchActionMovies:`https://api.themoviedb.org/3/discover/movie?api_key=e9a2cddf273cef9aee4d992be656b86f&with_genres=28`,
fetchComedyMovies:`https://api.themoviedb.org/3/discover/movie?api_key=e9a2cddf273cef9aee4d992be656b86f&with_genres=35`,
fetchHorrorMovies:`https://api.themoviedb.org/3/discover/movie?api_key=e9a2cddf273cef9aee4d992be656b86f&with_genres=27`,
fetchRomanceMovies:`https://api.themoviedb.org/3/discover/movie?api_key=e9a2cddf273cef9aee4d992be656b86f&with_genres=10749`,
fetchDocumentaries:`https://api.themoviedb.org/3/discover/movie?api_key=e9a2cddf273cef9aee4d992be656b86f&with_genres=99`,

}
export default requests;