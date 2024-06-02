// chatgptController.js
const chatgptService = require('../services/chatgptService');

module.exports.getChat = async (req, res) => {
  try {
    const userInput = req.body.message;
    const response = await chatgptService.getChat(userInput);
    return res.json(response);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'An error occurred' });
  }
};
