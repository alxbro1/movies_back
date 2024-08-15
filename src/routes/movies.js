const {Router} = require('express');
const {reqMovies, addMovie} = require('../controllers/movies')
const verifierUser  = require('../middleware/verifierUser')

const router = Router();

router.get('/', reqMovies)
router.post('/', verifierUser, addMovie)


module.exports = router