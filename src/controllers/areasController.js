const mongoose = require("mongoose")
const Area= require("../models/areasSchema")

const criaArea = async(req, res) => {
    const area = new Area({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        criadoEm: req.body.criadoEm
    })
    //regra que impede a criação de áreas de mesmo nome
    const areaJaExiste = await Area.findOne({nome: req.body.nome })
    if(areaJaExiste){
        return res.status(409).json({error: "Área já cadastrada, tente novamente."})
    }
    try{
        const novaArea = await area.save()
        res.status(201).json(novaArea)
    }catch (err){
        res.status(500).json({message: err.message})

    }
}
const mostraAreas = async (req, res) => {
    try {
        const areas = await Area.find()
        return res.status(200).json(areas)
   } catch(err){
       return res.status(500).json({message: err.message})
   }
}

const atualizaArea = async(req, res) =>{
    const encontraArea = await Area.findById(req.params.id)
    if(encontraArea== null){
        return res.status(404).json({message: 'Área não encontrada!'})
    }
    if (req.body.nome != null){
        encontraArea.nome = req.body.nome
    }
    try {
        const areaAtualizado = await encontraArea.save()
        res.status(200).json(areaAtualizado)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

const deletaArea = async (req,res) => {
    const encontraArea = await Area.findById(req.params.id)
    if(encontraArea== null){
        return res.status(404).json({message: 'Área não encontrada!'})
    }
    try{
        await encontraArea.remove()
        res.status(200).json({message: 'Deletada com sucesso'})

    } catch (err){
        res.status(500).json({message: err.message})
    }
    
}

module.exports ={
    criaArea,
    mostraAreas,
    atualizaArea,
    deletaArea
}