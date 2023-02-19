const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=68795df1a8824988c8a290cd09563d0e',
  timeout: 10000,
  headers: { 'Content-Type': 'Application/json' }
});



