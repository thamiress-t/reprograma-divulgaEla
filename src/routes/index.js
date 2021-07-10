const express = require("express")
const router = express.Router()

router.get("/", (request, response)=>{
    response.status(200).json({
        "titulo": "elaExplica - Projeto Final com a Reprograma.",
        "version": "1.0.0",
        "mensagem": "Esta primeira etapa do elaExplica tem o objetivo de ser uma plataforma de disponibilização de cursos ministrados apenas por mulheres nas áreas de Engenharia, Matemática e Física para ensino superior, a fim de diminuir evasão  de mulheres nesses campos. Esta é uma API  que organiza os cursos fornecidos pela plataforma. Para consumir, teste as seguintes rotas: /areas, /superior, /superior/fisica, /superior/matematica e /superior/engenharia. Obrigada!"
       
    })
})
module.exports = router