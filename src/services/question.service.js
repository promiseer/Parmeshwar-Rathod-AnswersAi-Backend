const httpStatus = require('http-status');
const { Question } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a user
 * @param {Object} questionBody
 * @returns {Promise<Question>}
 */
const saveQuestion = async (questionBody) => {

    return Question.create(questionBody);
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryQuestions = async (filter, options) => {
    const users = await Question.paginate(filter, options);
    return users;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<Question>}
 */
const getQuestionById = async (id) => {
    return Question.findById(id);
};

const getQuestionByAuthor = async (id) => {
    return Question.find({ author: id });
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<Question>}
 */
const updateQuestionById = async (userId, updateBody) => {
    const user = await getQuestionById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    if (updateBody.email && (await Question.isQuestionnameTaken(updateBody.email, userId))) {
        throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
    }
    Object.assign(user, updateBody);
    await user.save();
    return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<Question>}
 */
const deleteQuestionById = async (userId) => {
    const user = await getQuestionById(userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Question not found');
    }
    await Question.deleteOne()
    return user;
};

module.exports = {
    saveQuestion,
    queryQuestions,
    getQuestionById,
    updateQuestionById,
    deleteQuestionById,
    getQuestionByAuthor
};
