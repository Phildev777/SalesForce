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

const deleteUtilisateur = (req, res) => {
  utilisateurModel
    .deleteUtilisateur(req.params.id)
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
    const token = jwt.sign({ user: result[0] }, process.env.TOKEN_SECRET, {
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

module.exports = {
  getAllUtilisateurs,
  updateUtilisateur,
  getUtilisateurById,
  deleteUtilisateur,
  createUtilisateur,
  login,
  getAllUtilisateursService,
};
