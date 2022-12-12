const express = require('express')
const cors = require('cors')
const rut = require('./Routers/router.js')

const sequelize = require('./db.js');

sequelize.authenticate()
    .then(()=> {
        console.log('base de datos conectada')
    })
    .catch(err => {
        console.log(err)
    })


const blogs = require('./Models/BlogModel.js')
blogs.sync({force: true})

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs',rut)


app.listen(4000,()=>{
    console.log('listening on port 4000')
})
  