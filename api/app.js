const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());

//variable of API json file
const students = require('./students.json')

//res.json gets the message if app.get endpoint is hit (/ = homepage)
app.get('/', (req, res) => {
    res.json({ message: 'ok' });
})

app.get('/test', (req, res) => {
    res.json({ message: 'test message' });
})

var array = [1, 2, 3, 4, 5]

app.get('/numbers', (req, res) => {
    res.json(array)
})

//create endpoint for students json file using variable we created at the top
app.get('/students', (req, res) => {
    res.json(students)
})

//app.listen makes postman listen to a specific local host (3000)
app.listen(3001, () => {
    console.log('running');
})


//node app.js opens package.json file and runs each file in main to update after changes are made.