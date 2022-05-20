const express = require("express")

const app = express()

app.use(express.json())



const movieRoute = require("./routes/movieRoutes")

app.use("/api/v1", movieRoute)


module.exports = app