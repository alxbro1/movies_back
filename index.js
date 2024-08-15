const app = require('./src/server')
require('dotenv').config();
const dbConn = require('./src/configs/conn')

dbConn().then(()=>{
    app.listen(3000, ()=>{
        console.log("servidor en puerto 3000")
    })
})

