const API_KEY = process.env.REACT_APP_API_KEY;

const axios = require('axios');

// (search by title) https://api.themoviedb.org/3/search/movie?api_key=7bfb0a4d0d83804dcccf09005b9190a4&language=en-US&query=avengers&page=1&include_adult=false
// (trending movies) https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}

module.exports = {
  index
}

function index(req, res) {
  console.log('hello')
  axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
  .then(function (response){
    console.log(response.data)
    res.json(response.data)

  })
  .catch(function(error){
    console.log(error)
  })
}