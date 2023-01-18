const bcrypt = require("bcrypt");
const connection = require("../config/db");
require("dotenv").config();

const getAllUtilisateurs = () => {
  return connection.query("SELECT * FROM  utilisateur;");
};

const getUtilisateurById = (id) => {
  return connection.query("SELECT * FROM utilisateur WHERE id=?", [id]);
};

const createUtilisateur = async (
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
) => {
  try {
    const hashedMotdepasse = await bcrypt.hashSync(
      motdepasse,
      process.env.SALT
    );
    const [result] = await connection.query(
      "INSERT INTO utilisateur ( nom,prenom, dateembauche, motdepasse, admin, anniversaire,serviceIdservice, fonctionIdfonction, email,  biographie, avatar) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
      [
        nom,
        prenom,
        dateembauche,
        hashedMotdepasse,
        admin,
        anniversaire,
        serviceIdservice,
        fonctionIdfonction,
        email,
        biographie,
        avatar,
      ]
    );

    if (result.affectedRows > 0) {
      return "Created";
    }
    return "Not created";
  } catch (e) {
    console.error(e);
    return `Erreur : ${e}`;
  }
};

const updateUtilisateur = (id, newVersion) => {
  return connection.query("UPDATE utilisateur SET motdepasse=?, WHERE id=?", [
    newVersion,
    id,
  ]);
};

const deleteUtilisateur = (id) => {
  return connection.query("DELETE FROM utilisateur WHERE id=?;", [id]);
};

const login = async (nom, motdepasse) => {
  try {
    const hashedMotdepasse = await bcrypt.hashSync(
      motdepasse,
      process.env.SALT
    );
    const [result] = await connection.query(
      "SELECT id, nom, admin FROM utilisateur WHERE nom=? AND motdepasse=?",
      [nom, hashedMotdepasse]
    );

    if (result.length > 0) {
      return result[0];
    }
    return "problème";
  } catch (e) {
    console.error(e);
    return e;
  }
};

module.exports = {
  updateUtilisateur,
  getAllUtilisateurs,
  getUtilisateurById,
  deleteUtilisateur,
  createUtilisateur,
  login,
};
