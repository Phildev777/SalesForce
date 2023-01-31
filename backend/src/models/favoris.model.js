const connection = require("../config/db");

// create

const create = (utilisateurIdutilisateur, ideeIdidee) => {
  return connection.query(
    "INSERT INTO favoris (utilisateur_idutilisateur, idee_ididee) VALUES (?,?)",
    [Number(utilisateurIdutilisateur), Number(ideeIdidee)]
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
const deleteFav = (ideeIdidee, utilisateurIdutilisateur) => {
  return connection.query(
    "DELETE FROM favoris WHERE idee_ididee=? and utilisateur_idutilisateur=?",
    [ideeIdidee, utilisateurIdutilisateur]
  );
};

module.exports = {
  create,
  findAll,
  findByIdUser,
  deleteFav,
};
