const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const mongo_db = require('./config/mongo_db')

dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

app.use(express.json());

mongo_db();


app.use('/api', require('./src/routes'))

app.listen(process.env.PORT, () => {
    console.log(`server listening in ${process.env.PORT}`)
})