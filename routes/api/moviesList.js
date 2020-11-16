const express = require('express');
const router = express.Router();
const moviesListCtrl = require('../../controllers/moviesList');


router.post('/movies', moviesListCtrl.create);



module.exports = router;
