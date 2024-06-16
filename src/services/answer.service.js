const { CohereClient } = require('cohere-ai');
const { Answer } = require('../models');

const cohere = new CohereClient({
    token: process.env.COHEREAI_API_KEY,
});



const generativeAnwser = async (question) => {

    const response = await cohere.chat({
        message: question,
    });


    await saveAnwser({ answer: response.text, response })
    return response.text
};

const saveAnwser = async (response) => {
    if (!response) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Answer not found');

    }
    return Answer.create(response);
};



module.exports = {
    generativeAnwser,
};



