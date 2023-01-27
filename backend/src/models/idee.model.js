const connection = require("../config/db");

// create
/* INSERT INTO table VALUES ...
  return ok ou non ok */
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
  return connection.query("SELECT * FROM idee WHERE id=?", [id]);
};

// //update
// const update = (id) => {
//   /*UPDATE table SET...
//   return infos*/
// }

// //delete
// const remove = (id) => {
//   /*DELETE FROM table...
//   return infos*/
// }

module.exports = {
  create,
  findAll,
  findById,
  // update: update,
  // remove: remove
};
