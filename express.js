const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
    console.log("middleware!");
    res.send("list of users here !");
});

app.use('/', (req, res, next) => {
    console.log("second middleware!!");
    res.send("home page !!");
})

app.listen(3077);