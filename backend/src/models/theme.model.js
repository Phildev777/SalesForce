const connection = require("../config/db");

const getAll = () => {
  return connection.query("SELECT * FROM theme");
};

const getById = (id) => {
  return connection.query("SELECT * FROM theme WHERE idTheme = ?", [id]);
};

const createTheme = (nom) => {
  return connection.query("INSERT INTO theme (nom) VALUES (?)", [nom]);
};

const updateTheme = (nom, id) => {
  return connection.query("UPDATE theme SET nom = ? WHERE idTheme = ?", [
    nom,
    id,
  ]);
};

const deleteTheme = (id) => {
  return connection.query("DELETE FROM theme WHERE idTheme = ?", [id]);
};

module.exports = {
  getAll,
  getById,
  createTheme,
  updateTheme,
  deleteTheme,
};
