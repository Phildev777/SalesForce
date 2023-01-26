const router = require("express").Router();
const fs = require("fs");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const utilisateurController = require("../controllers/utilisateurs.controller");
const profilController = require("../controllers/profilController");

router.get("/", utilisateurController.getAllUtilisateurs);

router.get("/test", utilisateurController.getAllUtilisateursService);

router.get("/profile", profilController.getAllProfiles);

router.get("/:id", utilisateurController.getUtilisateurById);
router.get("/profile/:id", profilController.getAllProfiles);

router.post("/", utilisateurController.login);
router.put("/modifierAvatar/:id", utilisateurController.updateUser);

router.post("/creation", utilisateurController.createUtilisateur);
router.put("/:id", utilisateurController.updateUtilisateur);

const upload = multer({ dest: `${__dirname}../../../public/uploads/` });

router.post("/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;

  const { filename } = req.file;

  const nn = `${__dirname}/../../public/uploads/${uuidv4()}-${originalname}`;
  fs.rename(`${__dirname}/../../public/uploads/${filename}`, nn, (err) => {
    if (err) throw err;
    res.send(nn.replace(`${__dirname}/../../public/`, ""));
  });
});

router.delete(
  "/supprimer/:nom/:prenom",
  utilisateurController.deleteUtilisateur
);
router.get("/token/user", utilisateurController.getUserToken);

module.exports = router;
