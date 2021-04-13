let questions = require('./questions.json')

const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const findAllQuestions = () => {}
const findAllQuestionsById = () => {}
const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)
const updateQuestions = () => {}
const deleteQuestions = () => {}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findAllQuestionsById,
    findQuestionsForQuiz,
    updateQuestions,
    deleteQuestions
}
