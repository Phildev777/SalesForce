const connection = require("../config/db");

const getAllProfilesByIdWithService = (id) => {
  return connection.query(
    " SELECT u.email,u.biographie,u.dateembauche,u.avatar,u.anniversaire,u.serviceIdservice,u.prenom, u.nom AS username, s.nom AS serviceName FROM utilisateur AS u LEFT JOIN service AS s ON u.serviceIdservice = s.idservice WHERE id=? ",
    [id]
  );
};

const changeBio = (id, biographie) => {
  return connection.query("UPDATE utilisateur SET biographie=? WHERE id=?", [
    biographie,
    id,
  ]);
};

module.exports = {
  getAllProfilesByIdWithService,
  changeBio,
};
