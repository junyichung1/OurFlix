import tokenService from './tokenService';
const BASE_URL = '/api/moviesList';

export default {
    getAll,
    create
}

export function getAll() {
    return fetch(BASE_URL, {
      method: 'GET',
      headers: {
        // 'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenService.getToken()
      }})
    .then(res => res.json());
  }
//   added the method and header. look at pupppies crud for old getall function

export function create(list) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: {'content-type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
      },
        body: JSON.stringify(list)
    }).then(res => res.json());
    console.log("This should work");
}