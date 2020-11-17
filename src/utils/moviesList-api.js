// import tokenService from './tokenService';
const BASE_URL = '/api/moviesList';

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(list) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
      // 'Authorization': 'Bearer ' + tokenService.getToken()
      // },
        body: JSON.stringify(list)
    }).then(res => res.json());
    console.log("This should work");
}