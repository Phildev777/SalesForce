const bcrypt = require("bcrypt");
const { query } = require("../config/db");
const connection = require("../config/db");
require("dotenv").config();

const getAllUtilisateurs = () => {
  return connection.query("SELECT * FROM  utilisateur;");
};
const getAllUtilisateursService = () => {
  return connection.query("SELECT u.serviceIdservice,u.prenom ,u.id , u.nom AS username, s.nom AS serviceName FROM utilisateur AS u INNER JOIN service AS s ON u.serviceIdservice = s.idservice")
}

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
  email,
  serviceIdservice,
  fonctionIdfonction
) => {
  try {
    const hashedMotdepasse = await bcrypt.hashSync(
      motdepasse,
      process.env.SALT
    );
    const [result] = await connection.query(
      "INSERT INTO utilisateur ( nom,prenom, dateembauche, motdepasse, admin, anniversaire, email, serviceIdservice, fonctionIdfonction) VALUES (?,?,?,?,?,?,?,?,?)",
      [
        nom,
        prenom,
        dateembauche,
        hashedMotdepasse,
        admin,
        anniversaire,
        email,
        serviceIdservice,
        fonctionIdfonction,
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
      "SELECT id, nom FROM utilisateur WHERE nom=? AND motdepasse=?",
      [nom, hashedMotdepasse]
    );

    if (result.length > 0) {
      return result[0];
    }

    return "Utilisateur pas trouvé";
  } catch (e) {
    console.error(e);
    return "Erreur de serveur";
  }
};

module.exports = {
  updateUtilisateur,
  getAllUtilisateurs,
  getUtilisateurById,
  deleteUtilisateur,
  createUtilisateur,
  login,
  getAllUtilisateursService
};
