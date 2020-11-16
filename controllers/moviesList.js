const MovieList = require('../models/movieList')


module.exports = {
    create,
  }

  async function create(req, res) {
    // req.body.userID = req.user._id
    // console.log(`222222222`, req.user._id)
    const list = await MovieList.create(req.body);
    res.status(201).json(list);
  }