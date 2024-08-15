const services = require("../services/movies");
const asyncCatchVerifier = require("../utils/asyncErrorVerifier");

const reqMovies = async (req, res) => {
  const data = await services.getMovies();
  res.json(data);
};

const addMovie = async (req, res) => {
    const data = req.body

    await services.addMovie(data).then((response)=>{
      res.status(201).json({message: "movie created succesfuly", response});
    })
    .catch((err)=>{
      res.status(400).json({message:"Bad request",Error: err.errors});
    });
  
  
};

module.exports = {
  reqMovies: asyncCatchVerifier(reqMovies),
  addMovie: asyncCatchVerifier(addMovie),
};
