const mongoose = require('mongoose');

const initiateDBConnection = async()=>
{
    try{
        await mongoose.connect(process.env.MONGO_CONNECTION_URL);
        console.log('Connected to Mongo DB Server');
    } catch(error){
        console.log(error);
    }
};

module.exports = initiateDBConnection;