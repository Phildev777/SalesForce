const connection = require("../config/db");

const getAll = () => {
  return connection.query(" SELECT * FROM service");
};

const getById = (id) => {
  return connection.query("SELECT * FROM service WHERE id=?", [id]);
};

const createService = (nom, nbemploye, localisation) => {
  return connection.query(
    "INSERT INTO service (nom, nbemploye, localisation)",
    [nom, nbemploye, localisation]
  );
};

const upadateService = (id, nom, nbemploye, localisation) => {
  return connection.query(
    "UPDATE service SET (nom , nbemploye, localisation) WHERE id=?",
    [nom, nbemploye, localisation, id]
  );
};

const deleteService = (id) => {
  return connection.query("DELETE FROM service WHERE id=?", [id]);
};

module.exports = {
  getAll,
  getById,
  createService,
  upadateService,
  deleteService,
};
