const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(logger)

app.listen(3000)

app.get('/', (req,res) => {
    
    res.render('index', { text: 44});
})

const userRouter = require('./routes/users')

function logger(req, res, next) {
    console.log(req.originalUrl)
    // next()
}

app.use('/users', userRouter)

