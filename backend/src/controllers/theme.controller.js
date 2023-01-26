const themeModel = require("../models/theme.model");

const getAll = async (req, res) => {
  try {
    const [result] = await themeModel.getAll();
    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

const getById = async (req, res) => {
  try {
    const [result] = await themeModel.getById(req.params.id);
    return res.status(200).send(result);
  } catch (err) {
    console.error(err);
    return res.status(500).send("problem");
  }
};

const createTheme = async (req, res) => {
  try {
    const { nom } = req.body;
    const [result] = await themeModel.createTheme(nom);
    if (result.affectedRows > 0) {
      return res.status(201).send(result);
    }
    return res.status(400).send("Le thème existe déjà");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Problème");
  }
};

const updateTheme = async (req, res) => {
  try {
    const { nom } = req.body;
    const [result] = await themeModel.updateTheme(nom);
    if (result.affectedRows > 0) {
      return res.status(201).send(result);
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Problème");
  }
};

const deleteTheme = async (req, res) => {
  try {
    const [result] = await themeModel.deleteTheme(req.params.id);
    if (result.affectedRows > 0) {
      return res.status(200).send("Thème supprimé");
    }
    return res.status(400).send("erreur");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Problème");
  }
};

module.exports = {
  getAll,
  getById,
  createTheme,
  updateTheme,
  deleteTheme,
};
