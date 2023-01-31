const connection = require("../config/db");

// create

const create = (utilisateurIdutilisateur, ideeIdidee) => {
  return connection.query(
    "INSERT INTO favoris (utilisateur_idutilisateur, idee_ididee) VALUES (?,?)",
    [utilisateurIdutilisateur, ideeIdidee]
  );
};

// read
const findAll = () => {
  return connection.query("SELECT * FROM  favoris;");
};

const findByIdUser = (id) => {
  return connection.query(
    "SELECT * FROM favoris WHERE utilisateur_idutilisateur =?",
    [id]
  );
};

// delete
const deleteFav = (utilisateurIdutilisateur, ideeIdidee) => {
  return connection.query(
    "DELETE FROM favoris WHERE utilisateur_idutilisateur=? and idee_ididee=?",
    [utilisateurIdutilisateur, ideeIdidee]
  );
};

module.exports = {
  create,
  findAll,
  findByIdUser,
  deleteFav,
};
