const { response } = require('express');
const mongoose = require('mongoose');

const answerSchema = mongoose.Schema(
  {
    answer: {
      type: String,
      required: true
    },
    response: mongoose.Schema.Types.Mixed,
  },
  {
    timestamps: true,
  }
);





const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
