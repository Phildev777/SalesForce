const router = require("express").Router();
// const jwt = require("jsonwebtoken");
const utilisateurController = require("../controllers/utilisateurs.controller");
// const connection = require("../config/db");

router.get("/", utilisateurController.getAllUtilisateurs);
router.get("/:id", utilisateurController.getUtilisateurById);
router.post("/creation", utilisateurController.createUtilisateur);
router.put("/", utilisateurController.updateUtilisateur);
router.delete("/:id", utilisateurController.deleteUtilisateur);

module.exports = router;
