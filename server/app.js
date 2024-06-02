const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
const cors=require('cors');

app.use(cors({
    origin: '*'
}));

const dotenv = require('dotenv');
dotenv.config(
    {
        path: './config/.env'
    }
);

const PORT_NUMBER = process.env.PORT_NUMBER ||3000;
const initiateDBConnection = require('./config/db');
const codeRouter = require('./routers/codeRouter');
app.use('/code', codeRouter);

const registerRouter = require('./routers/registerRouter');
app.use('/register', registerRouter);


const authRouter = require('./routers/auth');
app.use('/auth', authRouter);

// const chatgptrouter = require('./routers/chatgptRouter');
// app.use('/chat', chatgptrouter);


// const chatgptRouter = require('./routers/chatgptRouter');
// app.use('/chat', chatgptRouter);

const chatgptRouter = require('./routers/chatgptRouter');
app.use('/chat', chatgptRouter);


// const openai = require('openai');
// const openaiClient = new openai.OpenAI({ apiKey: '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' });


// const bodyParser = require('body-parser');
// app.use(bodyParser.json());


// app.post('/chat', async (req, res) => {
    
//     try {
//       const userInput = req.body.message;
//       const response = await openaiClient.complete({
//         engine: 'davinci',
//         prompt: userInput,
//         maxTokens: 150
//       });
  
//       res.json({ message: response.data.choices[0].text.trim() });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   });

app.listen(PORT_NUMBER, async () => {
    console.log(`Server started and listening to port ${PORT_NUMBER}.`);
    await initiateDBConnection();
});



