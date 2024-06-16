
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError.js');
const ApiResponse = require('../utils/ApiResponse.js');
const questionService = require("../services/question.service.js")
const answerService = require("../services/answer.service.js")
const catchAsync = require('../utils/catchAsync');

const sendAnswer = catchAsync(async (req, res) => {
    const author = req.user._id;
    const { question } = req.body;


    const newQuestion = await questionService.saveQuestion({
        question,
        author
    });

    if (!newQuestion) {
        throw new ApiError(httpStatus.BAD_REQUEST, "bad request");

    }
    const answer = await answerService.generativeAnwser(newQuestion.question);

    return res
        .status(httpStatus.OK)
        .json(new ApiResponse(httpStatus.OK, { question, answer }));
});


const getQuestion = catchAsync(async (req, res) => {
    const question = await questionService.getQuestionById(req.params.questionId);
    if (!question) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    res.send(question);
});

const getQuestionByUserId = catchAsync(async (req, res) => {
    const question = await questionService.getQuestionByAuthor(req.params.userId);
    if (!question) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    res.send(question);
});

module.exports = {
    sendAnswer,
    getQuestion,
    getQuestionByUserId
};