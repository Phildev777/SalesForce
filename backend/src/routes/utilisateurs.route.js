const router = require("express").Router();

const utilisateurController = require("../controllers/utilisateurs.controller");

router.get("/", utilisateurController.getAllUtilisateurs);
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

/*  {
            
            "nom": "eliot",
            "prenom": "Kel",
            "dateembauche": "2020-04-29",
            "motdepasse": "machin",
            "admin": 0,
            "anniversaire": "2000-09-01",
            "serviceIdservice": 9,
            "fonctionIdfonction": 2,
            "email": "mach@huffingtonpost.com"
        } */
/*       {
          "nom": "Stark",
          "prenom": "Tony",
          "dateembauche": "2020-04-29",
          "motdepasse": "avengers",
          "admin": 1,
          "anniversaire": "2000-09-01",
          "serviceIdservice": 9,
          "fonctionIdfonction": 2,
          "email": "popperpots@huffingtonpost.com"
          } */

/*       {
"nom": "Rogers",
"prenom": "Steeve",
"dateembauche": "2020-04-29",
"motdepasse": "firstav",
"admin": 1,
"anniversaire": "2000-09-01",
"serviceIdservice": 9,
"fonctionIdfonction": 2,
"email": "kitten@huffingtonpost.com"
} */
