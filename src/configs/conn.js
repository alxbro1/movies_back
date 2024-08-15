const conn = require('mongoose')

const dbConn  = async ()=>{
    await conn.connect(process.env.ATLAS_URL);
}

module.exports = dbConn