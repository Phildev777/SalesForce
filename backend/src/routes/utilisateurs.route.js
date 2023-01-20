const router = require("express").Router();

const utilisateurController = require("../controllers/utilisateurs.controller");
const profilController = require("../controllers/profilController");

router.get("/", utilisateurController.getAllUtilisateurs);

router.get("/test", utilisateurController.getAllUtilisateursService);

router.get("/profile", profilController.getAllProfiles);

router.get("/:id", utilisateurController.getUtilisateurById);

router.post("/", utilisateurController.login);

router.post("/creation", utilisateurController.createUtilisateur);
router.put("/:id", utilisateurController.updateUtilisateur);
router.delete(
  "/supprimer/:nom/:prenom",
  utilisateurController.deleteUtilisateur
);
router.get("/token/user", utilisateurController.getUserToken);
module.exports = router;
