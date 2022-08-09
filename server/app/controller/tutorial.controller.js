const database = require('../models')

class TutorialController{
    static async pegarTutorial(req, res){
        try{
            const todoTutorial = await database.tutorial.findAll()
            return res.status(200).json(todoTutorial)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmTutorial(req, res){
        const { id } = req.params
        try{
            const umTutorial = await database.tutorial.findOne( { where: { id: Number(id) }} )
            return res.status(200).json(umTutorial)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async criarTutorial(req, res){
        const novoTutorial = req.body
        try{
            const criaTutorial = await database.tutorial.create(novoTutorial)
            return res.status(200).json(criaTutorial)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async atualizaTutorial(req, res){
        const { id } = req.params
        const alterarTutorial = req.body
        try{
            await database.tutorial.update(alterarTutorial, { where: { id: Number(id) }} )
            const updateTutorial = await database.tutorial.findOne( { where: { id: Number(id) }} )
            return res.status(200).json(updateTutorial)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
    static async apagaTutorial(req, res){
        const { id } = req.params
        try{
            await database.tutorial.destroy({ where: { id: Number(id) }})
            return res.status(200).json({ message: `O registro de id ${id} foi deletado`})
        }catch (error){
            return res.status(500).json(error.message)
        }
    }


}
module.exports = TutorialController