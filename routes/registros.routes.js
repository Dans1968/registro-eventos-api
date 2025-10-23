const express = require("express");
const router = express.Router();
const registrosController = require("../controllers/registros.controller");

router.get("/", registrosController.getAll);
router.post("/", registrosController.create);
router.delete("/:id", registrosController.remove);

module.exports = router;
