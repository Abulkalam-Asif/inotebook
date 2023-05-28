const mongoose = require('mongoose');
// const mongoURI = "mongodb://0.0.0.0:27017/";
const mongoURI = "mongodb://127.0.0.1:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
  mongoose.connect(mongoURI)
    .then(() => console.log('Successfully connected to Mongo'))
    .catch((err) => { console.error(err); });
}

module.exports = connectToMongo;