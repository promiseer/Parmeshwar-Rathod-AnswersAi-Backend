const { CohereClient } = require('cohere-ai');
const { Answer, Question } = require('../models');

const cohere = new CohereClient({
    token: process.env.COHEREAI_API_KEY,
});



const generativeAnwser = async (questionBody) => {
    const { question, _id: questionId } = questionBody
    const response = await cohere.chat({
        message: question,
    });


    const answer = await saveAnwser({ questionId, answer: response.text, response })
    await updateAnwserId(questionId, answer._id)

    return response.text
};

const saveAnwser = async (response) => {
    if (!response) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Answer not found');

    }
    return Answer.create(response);
};

const updateAnwserId = async (questionId, answerId) => {

    return await Question.updateOne({ _id: questionId, }, {
        $set: {
            answer: answerId
        }
    })
};




module.exports = {
    generativeAnwser,
};



