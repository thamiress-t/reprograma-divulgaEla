const express =require("express")
const router = express.Router()
const controller = require("../controllers/areasController")

//GET
router.post("/", controller.criaArea)
router.get("/", controller.mostraAreas)
router.patch("/:id", controller.atualizaArea)
router.delete("/:id",controller.deletaArea)

module.exports = router
