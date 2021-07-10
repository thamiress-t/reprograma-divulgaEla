const express = require('express')
const router = express.Router()
const controller = require('../controllers/superiorController')

router.post('/', controller.criaSuperior)
router.get('/', controller.mostraSuperior)
router.get('/engenharia', controller.mostraSuperiorEngenharia)
router.get('/matematica', controller.mostraSuperiorMatematica)
router.get('/fisica', controller.mostraSuperiorFisica)
router.patch('/:id', controller.atualizaSuperior)
router.delete('/:id', controller.deletaSuperior)

module.exports = router