//importando o framework express 
const express = require("express")
const app = express()
//importando o cors
const cors = require("cors")
app.use(cors())

//conectando database
const db = require("./data/dbConfig")
db.connect()

//express com json
app.use(express.json())

//routes
const areas = require("./routes/areasRoutes")
const superior = require("./routes/superiorRoutes")

//usando as rotas
app.use("/superior", superior)
app.use("/areas", areas)

module.exports = app