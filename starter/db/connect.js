const connectionString = 'your api here'
const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('Connected Database!')).catch((err) => console.log(err))
}

module.exports = connectDB;