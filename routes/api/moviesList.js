const express = require('express');
const router = express.Router();
const moviesListCtrl = require('../../controllers/moviesList');


router.post('/', moviesListCtrl.create);
router.get('/', moviesListCtrl.index);



module.exports = router;
