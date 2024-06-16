const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const questionValidation = require('../../validations/question.validation');
const questionController = require('../../controllers/question.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(questionValidation.createQuestion), questionController.sendAnswer) //Accept question question, and return AI-generated answer.



router
  .route('/:questionId')
  .get(auth(), validate(questionValidation.getQuestion), questionController.getQuestion)


module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Questions
 *   description: Question management and retrieval
 */

/**
 * @swagger
 * /questions:
 *   post:
 *     summary: Raise a question
 *     description: user can ask their  questions.
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *             properties:
 *               question:
 *                 type: string
 *             example:
 *               question: who is prime minister of india in 2024?
 *     responses:
 *       "200":
 *         description: Ok
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Questions'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * 
 */

/**
 * @swagger
 * /questions/{id}:
 *   get:
 *     summary: Get a question
 *     description: Logged in user can fetch only their own question information. Only admins can fetch other questions.
 *     tags: [Questions]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Question'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
