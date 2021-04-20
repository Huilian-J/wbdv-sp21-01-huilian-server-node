let questions = require('./questions.json')
const questionsModel = require("../models/questions/questions-model")
const questionsDao = require('../daos/questions-dao')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const findAllQuestions = () => {
    return questionsDao.findAllQuestions()
}
const findQuestionById = (questionId) => {
    return questionsDao.findQuestionById(questionId)
}
const findQuestionsForQuiz = (quizId) => {
    // questions.filter(question => question.quizId === quizId)
    return questionsDao.findQuestionsForQuiz(quizId)
}
const updateQuestions = () => {}
const deleteQuestions = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz,
    updateQuestions,
    deleteQuestions
}
