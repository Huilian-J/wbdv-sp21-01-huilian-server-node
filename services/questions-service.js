let questions = require('./questions.json')
const questionsModel = require("../models/questions/questions-model")

const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const findAllQuestions = () => {
    return questionsModel.find();
}
const findQuestionById = (questionId) => {
    return questionsModel.findById(questionId)
}
const findQuestionsForQuiz = (quizId) => {
    // questions.filter(question => question.quizId === quizId)
    return questionsModel.find({quizId: quizId})
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
