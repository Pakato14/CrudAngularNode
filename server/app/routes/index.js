const bodyParser = require ('body-parser')
const tutorial = require('./tutorialRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(tutorial)
    app.get('/', (req, res) => res.send('Bem vindo a app!'))

}