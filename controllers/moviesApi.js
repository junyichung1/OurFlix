const API_KEY = process.env.REACT_APP_API_KEY;

const axios = require('axios');

// https://api.themoviedb.org/3/search/movie?api_key=7bfb0a4d0d83804dcccf09005b9190a4&language=en-US&query=avengers&page=1&include_adult=false


module.exports = {
  index
}

function index(req, res) {
  console.log('hello')
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=7bfb0a4d0d83804dcccf09005b9190a4&language=en-US&query=avengers&page=1&include_adult=false`)
  .then(function (response){
    console.log(response.data)
    res.json(response.data)

  })
  .catch(function(error){
    console.log(error)
  })
}