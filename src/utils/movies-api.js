const BASE_URL = '/api/moviesApi'

export default {
  getMovies,
  // popular 
}

export function getMovies() {
  return fetch(`${BASE_URL}/movies`)
  .then(res => res.json())
}

// export function popular() {
//   return fetch(`${BASE_URL}/movies`)
//   .then(res => res.json())
// }