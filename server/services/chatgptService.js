const openai = require('openai');
const openaiClient = new openai.OpenAI({ apiKey: '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' });

module.exports.getChat = async(userInput) =>
{
    try {
        const response = await openaiClient.complete({
          engine: 'davinci',
          prompt: userInput,
          maxTokens: 150
        });
    
        res.json({ message: response.data.choices[0].text.trim() });
      } catch (error) {
        console.error(error);
        // res.status(500).json({ error: 'An error occurred' });
      }
    
}