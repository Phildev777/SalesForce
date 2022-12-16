const bcrypt = require("bcrypt");
const connection = require("../config/db");

const getAllUtilisateurs = () => {
  connection
    .query("SELECT * FROM  salesforce;")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const getUtilisateurById = (id) => {
  connection
    .query("SELECT * FROM utilisateur WHERE id=?", [id])
    .then((res) => {
      res.status(200).send(res);
    })

    .catch((err) => {
      console.error(err);
    });
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
  connection
    .query("UPDATE utilisateur SET motdepasse=?, WHERE id=?", [newVersion, id])
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
};

const deleteUtilisateur = (id) => {
  connection
    .query("DELETE FROM utilisateurs WHERE id=?;", [id])
    .then((res) => {
      res.status(200).send(res);
    })

    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  updateUtilisateur,
  getAllUtilisateurs,
  getUtilisateurById,
  deleteUtilisateur,
  createUtilisateur,
};
