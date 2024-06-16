const mongoose = require('mongoose');

const questionSchema = mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Answer',
      // required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  },
  {
    timestamps: true,
  }
);


const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
