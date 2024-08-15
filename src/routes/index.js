const {Router} = require('express')

const useMoviesRauters = require('./movies')

const router = Router();

router.use('/movies',useMoviesRauters)

module.exports = router