const mongoose = require('mongoose')
const Superior = require('../models/superiorSchema')

const criaSuperior = async(req, res) => {
    const superior = new Superior({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        descricao:req.body.descricao,
        pre_requisito:req.body.pre_requisito,
        area:req.body.area,
        criadoEm: req.body.criadoEm
    })

    //regra que nao permite criar um curso que ja existe
    const superiorJaExiste = await Superior.findOne({nome: req.body.nome })
    if(superiorJaExiste){
        return res.status(409).json({error: "Curso já cadastrado!"})
    }

    try {
        const novoSuperior = await superior.save()
        return res.status(201).json(novoSuperior)
    }catch (err) {
        return res.status(400).json({message: err.message})
    }
}

const mostraSuperior = async (req, res) => {
    try{
        const superiores = await Superior.find().populate('area')
        return res.status(200).json(superiores)
    } catch(err){
        return res.status(500).json({message: err.message})
    }   
}


const mostraSuperiorEngenharia = async (req, res) => {
    try{
    const superiores = await Superior.find().populate('area')
    const superiorFiltrado = superiores.filter(superior => superior.area.nome == "Engenharia")
    return res.status(200).json(superiorFiltrado)
    }catch(err){
        res.status(500).json({message: "Não existem cursos cadastrados nesta área!"})
    }
}

const mostraSuperiorMatematica = async (req, res) => {
    try{
    const superiores = await Superior.find().populate('area')
    const superiorFiltrado = superiores.filter(superior => superior.area.nome == "Matematica")
    return res.status(200).json(superiorFiltrado)
    } catch (err){
        res.status(500).json({message: "Não existem cursos cadastrados nesta área!"})
    }
}

const mostraSuperiorFisica = async (req, res) => {
    try{
    const superiores = await Superior.find().populate('area')
    const superiorFiltrado = superiores.filter(superior => superior.area.nome == "Fisica")
    return res.status(200).json(superiorFiltrado)
    } catch (err){
        res.status(500).json({message: "Não existem cursos cadastrados nesta área!"})
    }
}

const atualizaSuperior = async(req, res) =>{
    const encontraSuperior = await Superior.findById(req.params.id)
    if(encontraSuperior== null){
        return res.status(404).json({message: 'Curso não cadastrado!'})
    }
    if (req.body.nome != null){
        encontraSuperior.nome = req.body.nome
        encontraSuperior.descricao = req.body.descricao
        encontraSuperior.pre_requisito = req.body.pre_requisito
        encontraSuperior.area = req.body.area
        encontraSuperior.criadoEm = req.body.criadoEm
    }
    try {
        const superiorAtualizada = await encontraSuperior.save()
        res.status(200).json(superiorAtualizada)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

const deletaSuperior = async (req,res) => {
    const encontraSuperior = await Superior.findById(req.params.id)
    if(encontraSuperior== null){
        return res.status(404).json({message: 'Curso não cadastrado!'})
    }
    try{
        await encontraSuperior.remove()
        res.status(200).json({message: 'Deletado com sucesso'})

    } catch (err){
        res.status(500).json({message: err.message})
    }
    
}

    

module.exports = {
    criaSuperior,
    mostraSuperiorEngenharia,
    mostraSuperiorFisica,
    mostraSuperiorMatematica,
    mostraSuperior,
    atualizaSuperior,
    deletaSuperior
}
