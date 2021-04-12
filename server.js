const express = require('express')
const app = express()

const quizzesConstroller = require('./controllers/quizzes-controller')
quizzesConstroller(app)

app.listen(3000)