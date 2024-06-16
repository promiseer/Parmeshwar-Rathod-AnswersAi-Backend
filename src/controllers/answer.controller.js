
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');
const questionService = require("../services/question.service.js")
const answerService = require("../services/answer.service.js")

const sendAnswer = catchAsync(async (req, res) => {
    const question = await questionService.createQuestion(req.body);
    const answer = await answerService.generateAnwser(question);

    res.status(httpStatus.CREATED).send(answer);
});


module.exports = {
    sendAnswer

};