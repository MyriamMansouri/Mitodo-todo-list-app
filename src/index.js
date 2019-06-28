const express = require('express');
require('./db/mongoose');

const userRouter = require('././routers/user')
const taskRouter = require('././routers/task')

const app = express();
const port = process.env.PORT;

// app.use((req, res, next) => {

//         res.status(503).send('Requests are disabled')

// });

//parse incoming data into JSON object so it can be retrieved in th requests 
app.use(express.json());
app.use(userRouter, taskRouter);

// routes   



app.listen(port, () => {
    console.log('server listening on port ', port)
})