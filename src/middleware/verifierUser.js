const verifier = (req, res, next)=>{
    const {title, year, director, duration, genre, rate, poster} = req.body

    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        res.status(400).json({message: "Hay datos incompletos"})
    }
    else{
        next()
    }
}

module.exports = verifier