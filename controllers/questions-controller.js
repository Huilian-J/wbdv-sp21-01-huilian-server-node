const questionService
    = require("../services/questions-service")

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        questionService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }
    const findQuestionById = (req, res) => {
        const questionId = req.params['queId']
        questionService.findQuestionById(questionId)
            .then((question) => {
                res.send(question)
            })
    }
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params['qid']
        // const questions
        //     = questionService.findQuestionsForQuiz(quizId)
        questionService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:queId', findQuestionById)
    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz)
}
