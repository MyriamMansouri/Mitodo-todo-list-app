const express = require('express');
const path = require('path')

require('./db/mongoose');

const userRouter = require('././routers/user')
const taskRouter = require('././routers/task')

const app = express();
const port = process.env.PORT;

//parse incoming data into JSON object so it can be retrieved in th requests 
app.use(express.json());
app.use(userRouter, taskRouter);

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
    console.log('build')
}
//build mode
app.get('*', (req, res) => { res.sendFile(path.join(__dirname + '/client/public/index.html')); })


app.listen(port, () => {
    console.log('server listening on port ', port)
})