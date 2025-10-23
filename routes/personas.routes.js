// routes/personas.routes.js
const express = require("express");
const router = express.Router();
const personasController = require("../controllers/personas.controller");

router.get("/", personasController.getAll);
router.post("/", personasController.create);
router.put("/:id", personasController.update);
router.delete("/:id", personasController.remove);

module.exports = router;
