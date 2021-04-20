let quizzes = require('./quizzes.json')
const quizzesModel = require("../models/quizzes/quizzes-model")
const quizzesDao = require('../daos/quizzes-dao')

const createQuiz = () => {}
const findAllQuizzes = () => {
    // return quizzes
    // return quizzesModel.find()
    quizzesDao.findAllQuizzes()
}
const findQuizById = (quizId) => {
    // return quizzes.find(quiz => quiz._id === quizId)
    // return quizzesModel
    //     .findById(quizId)
    //     .populate("questions")
    //     .exec()
    quizzesDao.findQuizById(quizId)
}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}