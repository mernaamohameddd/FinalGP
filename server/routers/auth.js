const { Router } = require('express');
const authController = require('../controllers/auth');
const authRouter = Router();

authRouter.post('/signup', authController.postUser);

authRouter.post('/signin', authController.postLogin);

authRouter.get('/students', authController.getStudentsUsernames);

module.exports = authRouter;