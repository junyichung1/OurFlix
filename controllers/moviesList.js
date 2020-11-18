const MovieList = require('../models/movieList')


module.exports = {
    create,
    index
  }

async function create(req, res) {
//   req.body.user = req.user._id
  // console.log(`222222222`, req.body)
  req.body.userID = req.body.user._id 
  const list = await MovieList.create(req.body);
  // console.log('This is list', list)
  res.status(201).json(list);
}

async function index(req, res) {
  console.log("Does THIS work?");
  const lists = await MovieList.find({});
//   const lists = await MovieList.find({}).populate("user").exec(function (err, lists){
    
    //   });
    res.status(200).json(lists);
}