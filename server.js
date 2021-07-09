const express = require('express')
const app = express()


/*
//conectar database

const db = require('./src/data/database.js')
db.connect() //chamando a função que conecta o mongoDb 

//express com o json

app.use(express.json())

//rotas
const titulo = require('./src/routes/titulosRoutes')
const estudio = require('./src/routes/estudiosRoutes')

//usando as rotas
app.use('/titulos',titulo)
app.use('/estudios',estudio)
*/

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> console.log(`Servidor rodando na porta ${PORT}`))
