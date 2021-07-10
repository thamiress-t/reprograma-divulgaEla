require('dotenv').config()
const mongoose = require('mongoose')

//Para o Atlas/ Heroku:
/*const MONGO_URL = process.env.MONGODB_URI
const connect = () => {
    mongoose.connect(MONGO_URL,
        {
*/

//Para rodar localmente:
const connect = () => {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(() => {
            console.log("Conectado no MongoDB Atlas!")
        })
        .catch((error) => {
            console.log("Algo deu errado para se conectar ao MongoDB Atlas!");
            console.error(error);
        })
    }
module.exports = { connect }
