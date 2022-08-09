const { Router } = require('express')
const TutorialController = require('../controller/tutorial.controller')

const router = Router()
router.get('/tutorial', TutorialController.pegarTutorial)
router.get('/tutorial/:id', TutorialController.pegaUmTutorial)
router.post('/tutorial', TutorialController.criarTutorial)
router.put('/tutorial/:id', TutorialController.atualizaTutorial)
router.delete('/tutorial/:id', TutorialController.apagaTutorial)

module.exports = router