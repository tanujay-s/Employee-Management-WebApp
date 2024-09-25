require ('dotenv').config();
var mongoose = require('mongoose');


async function connectDb () {
    console.log(process.env.MONGODB_URL);
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database Connected');
    } catch (error) {
        console.error("Error connecting database: ", error);
    }
}

module.exports = {connectDb};