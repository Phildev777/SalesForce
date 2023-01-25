const jwt = require("jsonwebtoken");
const utilisateurModel = require("../models/utilisateurs.model");
require("dotenv").config();
// const bcrypt = require("bcrypt");

const getAllUtilisateurs = (req, res) => {
  utilisateurModel
    .getAllUtilisateurs()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getAllUtilisateursService = (req, res) => {
  utilisateurModel.getAllUtilisateursService().then(([result]) => {
    res.status(200).send(result);
  });
};

const updateUtilisateur = (req, res) => {
  utilisateurModel
    .updateUtilisateur(req.params.id, req.body.newVersion)
    .then((result) => {
      res.status(200).send(result);
    })

    .catch((err) => {
      console.error(err);
    });
};

const updateUser = (req, res) => {
  // console.log(req.params, req.body)
  utilisateurModel
    .updateUser(req.params.id, req.body.url)
    .then((result) => {
      // console.log("llllll", result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const getUtilisateurById = (req, res) => {
  utilisateurModel
    .getUtilisateurById(req.params.id)
    .then((result) => {
      res.status(200).send(result);
    })

    .catch((err) => {
      console.error(err);
    });
};

const deleteUtilisateur = async (req, res) => {
  await utilisateurModel
    .deleteUtilisateur(req.params.nom, req.params.prenom)

    .then((result) => {
      res.status(200).send(result);
    })

    .catch((err) => {
      console.error(err);
    });
};

const createUtilisateur = async (req, res) => {
  const {
    nom,
    prenom,
    dateembauche,
    motdepasse,
    admin,
    anniversaire,
    serviceIdservice,
    fonctionIdfonction,
    email,
    biographie,
    avatar,
  } = req.body;

  const result = await utilisateurModel.createUtilisateur(
    nom,
    prenom,
    dateembauche,
    motdepasse,
    admin,
    anniversaire,
    serviceIdservice,
    fonctionIdfonction,
    email,
    biographie,
    avatar
  );

  if (result === "Created") {
    return res.status(201).send("Inscription effectuée");
  }
  if (result === "Not created") {
    return res.status(200).send("Employé déjà inscrit");
  }

  return res.status(500).send("Something broke");
};

const login = async (req, res) => {
  try {
    const { nom, motdepasse } = req.body;
    const result = await utilisateurModel.login(nom, motdepasse);
    const token = jwt.sign({ user: result }, process.env.TOKEN_SECRET, {
      expiresIn: "24h",
    });
    console.warn(result);
    result.token = token;

    delete result.motdepasse;
    res.status(200).send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};
const getUserToken = (req, res) => {
  const { user } = jwt.verify(
    req.headers.authorization,
    process.env.TOKEN_SECRET
  );
  res.status(200).send(user);
};

module.exports = {
  getAllUtilisateurs,
  updateUtilisateur,
  getUtilisateurById,
  deleteUtilisateur,
  createUtilisateur,
  login,

  updateUser,

  getAllUtilisateursService,
  getUserToken,

};
