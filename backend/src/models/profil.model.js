const connection = require("../config/db");

const getAllProfiles = () => {
  return connection.query(
    " SELECT u.email, u.dateembauche, u.anniversaire,  u.serviceIdservice,u.prenom ,u.id , u.nom AS username, s.nom AS serviceName FROM utilisateur AS u LEFT JOIN service AS s ON u.serviceIdservice = s.idservice"
  );
};

module.exports = { getAllProfiles };
