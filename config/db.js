const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongooseURI');

const connectDB = async() => {
    try {
        mongoose.set('strictQuery', true);
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });
        console.log('Mongo DB is connected..');
    }catch(err) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;