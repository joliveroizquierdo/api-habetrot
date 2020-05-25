const mongoose = require('mongoose');

const DB = process.env.DATABASE_URL
            ? process.env.DATABASE_URL
            : 'mongodb://localhost/habetrot';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.on('error', (error) => console.error(error))
connection.once('open', () => console.log('Database is connected'))
