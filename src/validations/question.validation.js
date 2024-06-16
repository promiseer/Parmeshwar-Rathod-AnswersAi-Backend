const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createQuestion = {
  body: Joi.object().keys({
    question: Joi.string().required()
  }),
};


const getQuestion = {
  params: Joi.object().keys({
    questionId: Joi.string().custom(objectId),
  }),
};



module.exports = {
  createQuestion,
  getQuestion

};
