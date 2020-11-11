const BASE_URL = '/api/moviesApi'

export default {
  index
}

export function index() {
  return fetch(`${BASE_URL}/movies`)
  .then(res => res.json())
}