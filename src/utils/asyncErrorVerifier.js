const verifier = (cb) => {
  return (req,res,next) => {
    cb(req,res).catch((err) => next(err));
  }
}

module.exports = verifier