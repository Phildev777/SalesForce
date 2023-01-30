const connection = require("../config/db");

// create

const create = (
  date,
  theme,
  titre,
  description,
  archive,
  utilisateurIdutilisateur,
  serviceIdservice
) => {
  return connection.query(
    "INSERT INTO idee ( date, theme, titre, description, archive,utilisateur_Idutilisateur, service_Idservice) VALUES (?,?,?,?,?,?,?)",
    [
      date,
      theme,
      titre,
      description,
      archive,
      utilisateurIdutilisateur,
      serviceIdservice,
    ]
  );
};

// read
const findAll = () => {
  return connection.query("SELECT * FROM  idee;");
};

const findById = (id) => {
  return connection.query("SELECT * FROM idee WHERE ididee=?", [id]);
};

// Identifier l'utilisateur de l'idée
const userByIdea = (id) => {
  return connection.query(
    "select nom, prenom from utilisateur inner join idee on id = utilisateur_idutilisateur where ididee=?",
    [id]
  );
};

// //update
const updateIdea = (theme, titre, description, archive, id) => {
  return connection.query(
    "UPDATE idee SET theme=?, titre=?, description=?, archive=?, WHERE id=?",
    [theme, titre, description, archive, id]
  );
};

// delete
const deleteIdea = (id) => {
  return connection.query("DELETE FROM idee WHERE ididee=?", [id]);
};

module.exports = {
  create,
  findAll,
  findById,
  userByIdea,
  updateIdea,
  deleteIdea,
};
