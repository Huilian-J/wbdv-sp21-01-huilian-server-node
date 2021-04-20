const quizzesService = require('../services/quiz-service')

module.exports = (app) => {
    app.get('/api/quizzes', (req, res) =>
        quizzesService.findAllQuizzes()
            .then(allQuizzes => res.json(allQuizzes)))
    app.get('/api/quizzes/:qzid', (req, res) =>
        quizzesService.findQuizById(req.params['qzid'])
            .then(quiz => res.json(quiz)))

    // const findAllQuizzes = (req, res) => {
    //     // res.send(quizService.findAllQuizzes())
    //     quizService.findAllQuizzes()
    //         .then((quizzes) => {
    //             res.send(quizzes)
    //         })
    // }
    // const findQuizById = (req, res) => {
    //     const quizId = req.params['qid']
    //     // const quiz = quizService.findQuizById(quizId)
    //     // res.send(quiz)
    //     quizService.findQuizById(quizId)
    //         .then((quiz) => {
    //             res.send(quiz)
    //         })
    // }
    //
    // app.get('/api/quizzes', findAllQuizzes)
    // app.get('/api/quizzes/:qid', findQuizById)
}
