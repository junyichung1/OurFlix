const MovieList = require('../models/movieList')


module.exports = {
    create,
    index
  }

async function create(req, res) {
  // req.body.userID = req.user._id
  console.log(`222222222`, req.user._id)
  const list = await MovieList.create(req.body);
  res.status(201).json(list);
}

async function index(req, res) {
  console.log("Does THIS work?");
  const lists = await MovieList.find({});
  res.status(200).json(lists);
}