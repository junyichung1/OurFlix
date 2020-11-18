const BASE_URL = '/api/moviesApi'

export default {
  index,
  // popular 
}

export function index() {
  return fetch(`${BASE_URL}/movies`)
  .then(res => res.json())
}

// export function popular() {
//   return fetch(`${BASE_URL}/movies`)
//   .then(res => res.json())
// }