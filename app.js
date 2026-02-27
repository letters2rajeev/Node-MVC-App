const express = require('express');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const port = process.env.port;

app.set('view engine', 'ejs');
app.use('/', userRoute);

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})