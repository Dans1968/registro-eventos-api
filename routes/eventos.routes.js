const express = require("express");
const router = express.Router();
const eventosController = require("../controllers/eventos.controller");

router.get("/", eventosController.getAll);
router.post("/", eventosController.create);
router.put("/:id", eventosController.update);
router.delete("/:id", eventosController.remove);

module.exports = router;
