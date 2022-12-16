// const jwt = require("jsonwebtoken");
const utilisateurModel = require("../models/utilisateurs.model");

const getAllUtilisateurs = (req, res) => {
  utilisateurModel
    .getAllUtilisateurs()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
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
    email,
    serviceIdservice,
    fonctionIdfonction,
  } = req.body;

  const result = await utilisateurModel.createUtilisateur(
    nom,
    prenom,
    dateembauche,
    motdepasse,
    admin,
    anniversaire,
    email,
    serviceIdservice,
    fonctionIdfonction
  );

  if (result === "Created") {
    return res.status(201).send("Inscription effectuée");
  }
  if (result === "Not created") {
    return res.status(200).send("Employé déjà inscrit");
  }

  return res.status(500).send("Something broke");
};

module.exports = {
  getAllUtilisateurs,
  updateUtilisateur,
  getUtilisateurById,
  deleteUtilisateur,
  createUtilisateur,
};
