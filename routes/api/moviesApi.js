const express = require('express');
const router = express.Router();
const moviesApiCtrl = require('../../controllers/moviesApi');

/*---------- Public Routes ----------*/
router.get('/movies', moviesApiCtrl.index)


/*---------- Protected Routes ----------*/




module.exports = router;