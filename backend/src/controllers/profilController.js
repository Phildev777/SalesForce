const profilModel = require("../models/profil.model");

const getAllProfiles = (req, res) => {
  profilModel
    .getAllProfiles()
    .then(([result]) => {
      res.status(200).send(result);
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error");
    });
};

module.exports = { getAllProfiles };