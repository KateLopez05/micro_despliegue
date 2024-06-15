const {dbConnection} = require('./database/configuration.js')
const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()

const app = express()

 

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use(
    cors({
    origin: '*'})
)

dbConnection()



const proyectos = require("./routes/proyectoRoute.js")


//middlewares


app.use('/api/proyectos', proyectos)



module.exports = app

