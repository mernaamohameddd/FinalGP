const { Router } = require('express');
const chatgptController = require('../controllers/chatgptController');

const chatgptRouter = Router();
chatgptRouter.post('/message', chatgptController.getChat);

module.exports = chatgptRouter;
