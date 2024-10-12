const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})


app.use('/api', require('./src/routes'))

app.listen(process.env.PORT, () => {
    console.log(`server listening in ${process.env.PORT}`)
})