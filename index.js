//Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('Home')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

//Listen for connections 
app.listen(process.env.PORT)



