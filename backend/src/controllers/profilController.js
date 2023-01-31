const profilModel = require("../models/profil.model");

const getAllProfiles = (req, res) => {
  profilModel
    .getAllProfilesByIdWithService(req.params.id)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error");
    });
};

const changeBio = (req, res) => {
  profilModel
    .changeBio(req.params.id, req.body.biographie)
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error");
    });
};

module.exports = {
  getAllProfiles,
  changeBio,
};
