const express = require('express')
const consign = require('consign')
const app = express()

const knexDb = require('./config/db.js')

app.db = knexDb

// const db = require('./config/db.js')
// app.db = db

consign()
    .then('./config/middlewares.js')
    .then('./api/resultados.js')
    .then('./api/chamadas.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)


app.listen(3001, () => {
    console.log('backend ativo!!')
})