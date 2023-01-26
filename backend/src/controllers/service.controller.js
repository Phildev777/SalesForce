const serviceModel = require("../models/service.model");

const getAll = async (req, res) => {
  try {
    const [result] = await serviceModel.getAll();
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(404).send("service not found");
  }
};

const getById = async (req, res) => {
  try {
    const [result] = await serviceModel.getById();
    return res.status(200).send(result);
  } catch (error) {
    console.error(error);
    return res.status(404).send("service not found");
  }
};

const createService = async (req, res) => {
  try {
    const { nom, nbemploye, localisation } = req.body;
    const [result] = await serviceModel.createService(
      nom,
      nbemploye,
      localisation
    );
    if (result.affectedRows) {
      return res.status(201).send(result);
    }
    return res.status(400).send("service not created");
  } catch (error) {
    console.error(error);
    return res.status(400).send("service not created");
  }
};

const updateService = async (req, res) => {
  try {
    const { nom, nbemploye, localisation } = req.body;
    const [result] = await serviceModel.upadateService(
      nom,
      nbemploye,
      localisation
    );
    if (result.affectedRows) {
      return res.status(204).send(result);
    }
    return res.status(400).send("service not updated");
  } catch (error) {
    console.error(error);
    return res.status(400).send("service not updated");
  }
};
const deleteService = async (req, res) => {
  try {
    const { id } = req.body;
    const [result] = await serviceModel.deleteService(id);
    if (result.affectedRows) {
      return res.status(204).send(result);
    }
    return res.status(400).send("service not deleted");
  } catch (error) {
    console.error(error);
    return res.status(400).send("service not deleted");
  }
};
module.exports = {
  getAll,
  getById,
  createService,
  updateService,
  deleteService,
};
