require('dotenv').config()
const express = require('express');
const app = express();
const mainRoute = require('./routes/main')
const port = process.env.PORT;

app.use('/todo', mainRoute)

app.listen(port, () => {
    console.log(`server is up and running at port ${port}`)
})